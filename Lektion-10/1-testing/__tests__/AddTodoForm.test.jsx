import { AddTodoForm } from '@/components/add-todo-form'
import TodosContextProvider from '@/providers/TodosProvider'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

const MockAddTodoForm = () => {
  return (
    <TodosContextProvider>
      <AddTodoForm />
    </TodosContextProvider>
  )
}

describe('AddTodoForm', () => {

  it('should render the textbox', () => {
    render(<MockAddTodoForm />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  it('should update value on input', () => {
    render(<MockAddTodoForm />)

    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'En text som skrivs in i inputen' } })

    expect(inputElement.value).toBe('En text som skrivs in i inputen')
  })

  it('should clear the input on submit', () => {
    render(<MockAddTodoForm />)
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'En text som skrivs in i inputen' } })

    const formElement = screen.getByRole('form')
    fireEvent.submit(formElement)

    expect(inputElement.value).toBe('')
  })

})