'use client'

import { useTodos } from "@/providers/TodosProvider"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"

export const AddTodoForm = () => {

  const [title, setTitle] = useState('')
  const { addTodo } = useTodos()

  const handleSubmit = e => {
    e.preventDefault()
    if(title.trim() === '') return
    addTodo(title)
    setTitle('')
  }

  return (
    <form name="add-todo-form" onSubmit={handleSubmit} className="p-4 flex gap-2">
      <Input value={title} onChange={e => setTitle(e.target.value)} />
      <Button>ADD</Button>
    </form>
  )
}