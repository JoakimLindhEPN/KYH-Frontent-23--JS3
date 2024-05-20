'use client'

import { createContext, useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export const TodosContext = createContext()

const TodosContextProvider = ({ children }) => {
  
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const todo = {
      id: uuidv4(),
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