import checkApiKey from "@/lib/checkApiKey";
import dbConnect from "@/lib/mongodb";
import Todo from "@/models/todoSchema";
import { NextResponse } from "next/server";


export async function GET(req) {
  await dbConnect()
  try {

    const user = await checkApiKey(req)
    if(!user) {
      return NextResponse.json({ message: 'Invalid API Key' }, { status: 401 })
    }

    const todos = await Todo.find({ userId: user._id })
    return NextResponse.json(todos, { status: 200 })

  } catch (err) {
    return NextResponse.json({ message: "someting went wrong" }, { status: 500 })
    
  }
}




export async function POST(req) {
  await dbConnect()

  try {
    const user = await checkApiKey(req)
  
    if(!user) {
      return NextResponse.json({ message: 'Invalid API Key' }, { status: 401 })
    }
  
    const { title } = await req.json()
    if(!title) {
      return NextResponse.json({ message: 'Please enter a title' }, { status: 400 })
    }
  
    const todo = await Todo.create({ title, userId: user._id })
    return NextResponse.json(todo, { status: 201 })
  } catch (err) {
    return NextResponse.json({ message: "someting went wrong" }, { status: 500 })
  }

}