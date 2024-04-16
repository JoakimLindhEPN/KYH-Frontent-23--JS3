"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import createTodo from "./actions"

function CreatePage() {
  const [title, setTitle] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    createTodo({ title })
  } 

  return (
    <div className="container mx-auto mt-40">
      <form onSubmit={onSubmit} >
        <Input name="title" placeholder="todo title" value={title} onChange={e => setTitle(e.target.value)} />
        <Button className="w-full mt-10">Create</Button>
      </form>
    </div>
  )
}
export default CreatePage