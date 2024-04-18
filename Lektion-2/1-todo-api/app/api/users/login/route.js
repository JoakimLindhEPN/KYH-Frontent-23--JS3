import User from "@/models/userSchema"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import dbConnect from "@/lib/mongodb"


export async function POST(req) {
  const { email, password } = await req.json()

  if(!email || !password) {
    return NextResponse.json({ message: "Please enter an email address and a password"}, { status: 400 })
  }

  try {
    await dbConnect()
    const user = await User.findOne({ email })
    if(!user) {
      return NextResponse.json({ message: "invalid credentials" }, { status: 401 })
    }

    const confirmedUser = await bcrypt.compare(password, user.passwordHash)
    if(!confirmedUser) {
      return NextResponse.json({ message: "invalid credentials" }, { status: 401 })
    }

    return NextResponse.json({ apiKey: user.apiKey }, { status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    
  }
}