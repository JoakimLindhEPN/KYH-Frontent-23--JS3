import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { TodosList } from '@/components/todos-list'
import TodosContextProvider from '@/providers/TodosProvider'

const mockTodos = [
  {
    id: 1,
    title: 'mock todo 1'
  },
  {
    id: 2,
    title: 'mock todo 2'
  },
  {
    id: 3,
    title: 'mock todo 3'
  },
]

const mockTodosEmpty = []

const MockTodosList = ({ todos }) => {
  return (
    <TodosContextProvider>
      <TodosList todos={todos} />
    </TodosContextProvider>
  )
}

describe('TodosList', () => {

  it('should render all todos passed as props', () => {
    render(<MockTodosList todos={mockTodos} />)
    const todos = screen.queryAllByTestId('todo-element')
    expect(todos.length).toBe(mockTodos.length)
  })
  it('should render all todos passed as props', () => {
    render(<MockTodosList todos={mockTodosEmpty} />)
    const todos = screen.queryAllByTestId('todo-element')
    expect(todos.length).toBe(mockTodosEmpty.length)
  })

  
  describe('Todo', () => {
    it('should be rendered', () => {
      render(<MockTodosList todos={mockTodos} />)
      const todo = screen.getByText(/mock todo 1/i)
      expect(todo).toBeInTheDocument()
    })
  })

})
