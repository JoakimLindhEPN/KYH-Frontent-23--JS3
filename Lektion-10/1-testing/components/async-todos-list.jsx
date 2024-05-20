import { useTodos } from "@/providers/TodosProvider"
import { TodosLeft } from "./todos-left"
import { useEffect, useState } from "react"

export const AsyncTodosList = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodosAsync = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      const data = await res.json()
      setTodos(data)
    }
    getTodosAsync()
  }, [])

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <TodosLeft amount={todos.length} />
      </div>
      <div>
        { todos && todos.map(todo => (
          <p data-testid="async-todo" key={todo.id} className="py-2 border-b first:border-t cursor-pointer hover:bg-slate-50/5">{ todo.title }</p>
        ))}
      </div>
    </div>
  )
}