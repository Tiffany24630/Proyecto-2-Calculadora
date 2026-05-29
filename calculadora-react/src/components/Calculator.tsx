import { Display } from './Display'
import { Keyboard } from './Keyboard'
import { useCalculator } from '../hooks/useCalculator'

export const Calculator = () => {
  const calculator = useCalculator()

  return (
    <div className='calculator'>
      <Display value={calculator.display} />
      <Keyboard {...calculator} />
    </div>
  )
}