import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/header/header'


describe('Header', () => {

  it('should render the same headline passed as props', () => {
    render(<Header title="My Title" />)  // ARRANGE
    const headingElement = screen.getByText(/My title/i) // ACT         i står för case Insensitive
    
    expect(headingElement).toBeInTheDocument() // ASSERT
  })

  it('should render the heading', () => {
    render(<Header title="My Title" />)
    const headingElement = screen.getByRole('heading', { name: /My title/i })
    expect(headingElement).toBeInTheDocument()
  })
  

  // FIND by är async och behöver await. Bra om vi ska vänta på svar från en databas tex
  it('should render the same headline passed as props', async () => {
    render(<Header title="My Title" />)
    const headingElement = await screen.findByText(/My title/i)
    
    expect(headingElement).toBeInTheDocument()
  })


  // QUERY by ger oss inte ett error om vi inte hittar elementet. Bra om vi tex vill kolla om ett element INTE finns
  it('should render the same headline passed as props', () => {
    render(<Header title="My Title" />)
    const headingElement = screen.queryByText("nisse")
    expect(headingElement).not.toBeInTheDocument()
  })

  // Alla metoder finns som en ALL variant och då får vi en array tillbaka
  it('should render 2 heading elements', () => {
    render(<Header title="My Title" />)
    const headingElements = screen.getAllByRole('heading')
    expect(headingElements.length).toBe(2)
  })
})
