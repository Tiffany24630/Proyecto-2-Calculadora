import { Button } from './Button'
import { Display } from './Display'
import { useCalculator } from '../hooks/useCalculator'

export const Calculator = () => {
  const {
    display,
    appendNumber,
    addDecimal,
    toggleSign,
    clearDisplay,
    chooseOperator,
    calculate
  } = useCalculator()

  return (
    <div className='calculator'>
      <Display value={display} />

      <div className='grid'>
        <Button label='C' onClick={clearDisplay} />
        <Button label='+/-' onClick={toggleSign} />
        <Button label='%' onClick={() => chooseOperator('%')} />
        <Button label='÷' onClick={() => chooseOperator('÷')} />

        <Button label='7' onClick={() => appendNumber('7')} />
        <Button label='8' onClick={() => appendNumber('8')} />
        <Button label='9' onClick={() => appendNumber('9')} />
        <Button label='×' onClick={() => chooseOperator('×')} />

        <Button label='4' onClick={() => appendNumber('4')} />
        <Button label='5' onClick={() => appendNumber('5')} />
        <Button label='6' onClick={() => appendNumber('6')} />
        <Button label='-' onClick={() => chooseOperator('-')} />

        <Button label='1' onClick={() => appendNumber('1')} />
        <Button label='2' onClick={() => appendNumber('2')} />
        <Button label='3' onClick={() => appendNumber('3')} />
        <Button label='+' onClick={() => chooseOperator('+')} />

        <Button label='.' onClick={addDecimal} />
        <Button label='0' onClick={() => appendNumber('0')} />
        <Button label='=' onClick={calculate} />
      </div>
    </div>
  )
}