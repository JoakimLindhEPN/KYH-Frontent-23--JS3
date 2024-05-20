import { AsyncTodosList } from '@/components/async-todos-list'
import { mockedTodoResponse } from '@/jest.setup'
import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'


describe('AsyncTodosList', () => {

  it('should make a GET request to fetch the todos and limit the response to 10', async () => {
    await act(async () => {
      render(<AsyncTodosList />)
    })

    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos?_limit=10')
  })

  it('should render all todos fetched', async () => {
    await act(async () => {
      render(<AsyncTodosList />)
    })

    const todos = await screen.findAllByTestId('async-todo')
    expect(todos).toHaveLength(mockedTodoResponse.length)
  })

})