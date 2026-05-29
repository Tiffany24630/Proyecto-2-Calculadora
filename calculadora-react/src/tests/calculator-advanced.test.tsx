import { render, screen, fireEvent } from '@testing-library/react'

import { Calculator } from '../components/Calculator'

describe('Advanced Calculator Tests', () => {
  test('division works correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('÷'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))

    expect(screen.getByText('4')).toBeInTheDocument()
  })

  test('division by zero shows ERROR', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('÷'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('='))

    expect(screen.getByText('ERROR')).toBeInTheDocument()
  })

  test('decimal numbers work correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('5'))

    fireEvent.click(screen.getByText('+'))

    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('5'))

    fireEvent.click(screen.getByText('='))

    expect(screen.getByText('4')).toBeInTheDocument()
  })

  test('multiple decimals are prevented', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('.'))

    expect(screen.getByText('1.')).toBeInTheDocument()
  })

  test('modulo works correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('%'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  test('clear button resets calculator', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('C'))

    expect(screen.getByText('0')).toBeInTheDocument()
  })
})