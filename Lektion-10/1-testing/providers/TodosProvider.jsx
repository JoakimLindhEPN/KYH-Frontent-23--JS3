'use client'

import { createContext, useContext, useState } from "react"

export const TodosContext = createContext()

const TodosContextProvider = ({ children }) => {
  
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const todo = {
      id: crypto.randomUUID(),
      title
    }

    setTodos(state => [...state, todo])
  }
  const deleteTodo = (id) => {
    setTodos(state => state.filter(todo => todo.id !== id))
  }

  const value = {
    todos,
    addTodo,
    deleteTodo
  }
  return (
    <TodosContext.Provider value={value}>
      { children }
    </TodosContext.Provider>
  )
}
export default TodosContextProvider

export const useTodos = () => {
  const context = useContext(TodosContext)
  if(!context) throw new Error('useTodos must be inside of an TodosContextProvider')
    return context
}