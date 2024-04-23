import checkApiKey from "@/lib/checkApiKey";
import dbConnect from "@/lib/mongodb";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
  await dbConnect()

  try {
    const user = await checkApiKey(req)
    if(!user) {
      return NextResponse.json({ message: 'Invalid API Key' }, { status: 401 })
    }

    const { todoId } = params;
    const todo = await Todo.findOne({ _id: todoId, userId: user._id })
    if(!todo) {
      return NextResponse.json({ message: "Todo not found!" }, { status: 404 })
    }

    return NextResponse.json(todo, { status: 200 })

  } catch (err) {
    return NextResponse.json({ message: "something went wrong" }, { status: 500 })
  }
}


export async function PUT(req, { params }) {
  await dbConnect()

  try {
    const user = await checkApiKey(req)
    if(!user) {
      return NextResponse.json({ message: 'Invalid API Key' }, { status: 401 })
    }
    const { todoId } = params;
    const { title, completed } = await req.json()
    const updatedTodo = await Todo.findOneAndUpdate({ _id: todoId, userId: user._id }, { title, completed }, { new: true })

    if(!updatedTodo) {
      return NextResponse.json({ message: 'Todo not found!' }, { status: 404 })
    }

    return NextResponse.json(updatedTodo, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "something went wrong" }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  await dbConnect()

  try {
    const user = await checkApiKey(req)
    if(!user) {
      return NextResponse.json({ message: 'Invalid API Key' }, { status: 401 })
    }

    const { todoId } = params;
    const deletedTodo = await Todo.findOneAndDelete({ _id: todoId, userId: user._id })

    if(!deletedTodo) {
      return NextResponse.json({ message: 'Todo not found!' }, { status: 404 })
    }

    return NextResponse.json(deletedTodo._id, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    
  }
}