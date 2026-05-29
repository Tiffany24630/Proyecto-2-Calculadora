import { render, screen, fireEvent } from '@testing-library/react'
import { Calculator } from '../components/Calculator'

describe('Calculator', () => {
  test('renders display', () => {
    render(<Calculator />)

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  test('adds two numbers correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))

    expect(screen.getByText('5')).toBeInTheDocument()
  })

  test('shows ERROR on negative result', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('='))

    expect(screen.getByText('ERROR')).toBeInTheDocument()
  })

  test('limits display to 9 characters', () => {
    render(<Calculator />)

    for (let i = 0; i < 10; i++) {
      fireEvent.click(screen.getByText('9'))
    }

    expect(screen.getByText('999999999')).toBeInTheDocument()
  })
})