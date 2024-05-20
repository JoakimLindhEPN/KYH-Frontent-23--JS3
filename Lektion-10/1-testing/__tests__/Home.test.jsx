import '@testing-library/jest-dom'
import { act, fireEvent, render, screen } from '@testing-library/react'

import Home from '@/app/page'
import TodosContextProvider from '@/providers/TodosProvider'

const MockHomePage = () => {
  return (
    <TodosContextProvider>
      <Home /> 
    </TodosContextProvider>
  )
}

const addTodos = (todoTitles) => {
  const inputElement = screen.getByRole('textbox', { name: 'todo-title-input'})
  const formElement = screen.getByRole('form')
  todoTitles.forEach(title => {
    fireEvent.change(inputElement, { target: { value: title }})
    fireEvent.submit(formElement)
  })
}

describe('Home', () => {
  describe('integration test if possible to add and remove todos', () => {

    it('should render a todo with the same text as entered in the text input', async () => {
      await act(async () => {
        render(<MockHomePage />)
      })

      const inputElement = screen.getByRole('textbox', { name: 'todo-title-input'})
      fireEvent.change(inputElement, { target: { value: 'Städa kontoret' }})

      const formElement = screen.getByRole('form')
      fireEvent.submit(formElement)

      const todo = screen.getByText(/städa kontoret/i)
      expect(todo).toBeInTheDocument()
    })

    it('should render a todo for each submit', async () => {
      await act(async () => {
        render(<MockHomePage />)
      })

      const mockTodos = ['todo 1', 'todo 2', 'todo 3']
      addTodos(mockTodos)     

      const todos = screen.queryAllByTestId('todo-element')
      expect(todos.length).toBe(mockTodos.length)
    })

  })


  it('should remove the todo if clicked on', async () => {
    await act(async () => {
      render(<MockHomePage />)
    })
    addTodos(['todo 1', 'todo 2', 'todo 3'])

    const todoElement = screen.getByText(/todo 2/i)
    fireEvent.click(todoElement)

    expect(todoElement).not.toBeInTheDocument()
  })

})