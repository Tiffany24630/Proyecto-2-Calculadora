import { useState } from 'react'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [firstValue, setFirstValue] = useState<number | null>(null)
  const [operator, setOperator] = useState('')
  const [waitingSecondValue, setWaitingSecondValue] = useState(false)

  const appendNumber = (value: string) => {
    if (display === 'ERROR') {
      return
    }

    if (waitingSecondValue) {
      setDisplay(value)
      setWaitingSecondValue(false)
      return
    }

    if (display.length >= 9) {
      return
    }

    if (display === '0') {
      setDisplay(value)
      return
    }

    setDisplay(display + value)
  }

  const addDecimal = () => {
    if (display === 'ERROR') {
      return
    }

    if (waitingSecondValue) {
      setDisplay('0.')
      setWaitingSecondValue(false)
      return
    }

    if (display.includes('.')) {
      return
    }

    if (display.length >= 8) {
      return
    }

    setDisplay(display + '.')
  }

  const toggleSign = () => {
    if (display === '0' || display === 'ERROR') {
      return
    }

    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
      return
    }

    if (display.length >= 9) {
      return
    }

    setDisplay('-' + display)
  }

  const clearDisplay = () => {
    setDisplay('0')
    setFirstValue(null)
    setOperator('')
    setWaitingSecondValue(false)
  }

  const chooseOperator = (op: string) => {
    if (display === 'ERROR') {
      return
    }

    setFirstValue(Number(display))
    setOperator(op)
    setWaitingSecondValue(true)
  }

  const calculate = () => {
    if (firstValue === null || operator === '') {
      return
    }

    const secondValue = Number(display)

    let result = 0

    switch (operator) {
      case '+':
        result = firstValue + secondValue
        break

      case '-':
        result = firstValue - secondValue
        break

      case '×':
        result = firstValue * secondValue
        break

      case '÷':
        if (secondValue === 0) {
          setDisplay('ERROR')
          setFirstValue(null)
          setOperator('')
          return
        }

        result = firstValue / secondValue
        break

      case '%':
        result = firstValue % secondValue
        break

      default:
        return
    }

    if (
      result < -99999999 ||
      result > 999999999 ||
      !Number.isFinite(result)
    ) {
      setDisplay('ERROR')
      setFirstValue(null)
      setOperator('')
      return
    }

    const formattedResult = Number(result.toFixed(4))
      .toString()
      .slice(0, 9)

    setDisplay(formattedResult)
    setFirstValue(null)
    setOperator('')
    setWaitingSecondValue(false)
  }

  return {
    display,
    appendNumber,
    addDecimal,
    toggleSign,
    clearDisplay,
    chooseOperator,
    calculate
  }
}