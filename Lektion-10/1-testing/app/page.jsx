'use client'

import { AddTodoForm } from "@/components/add-todo-form"
import { AsyncTodosList } from "@/components/async-todos-list"
import { Header } from "@/components/header/header"
import { TodosList } from "@/components/todos-list"
import { useTodos } from "@/providers/TodosProvider"

function Home() {

  const { todos } = useTodos()

  return (
    <div className="h-screen p-10">
      <div className="border h-full rounded-lg">
        <Header title="My Todos" />
        <AddTodoForm />
        <TodosList todos={todos} />
        <AsyncTodosList />
      </div>
    </div>
  )
}
export default Home