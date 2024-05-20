import { TodosLeft } from '@/components/todos-left'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('TodosLeft', () => {

  it('should render the coorect amount of todos left', () => {
    render(<TodosLeft amount={3} />)
    const element = screen.getByText("3 todos left")
    expect(element).toBeInTheDocument()
  })

  it('should render "todo" when there is only one todo left', () => {
    render(<TodosLeft amount={1} />)
    const element = screen.getByText("1 todo left")
    expect(element).toBeInTheDocument()
  })
})