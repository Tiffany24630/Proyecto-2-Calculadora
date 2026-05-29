import { Button } from './Button'
import { createButtons } from '../utils/buttons'

type Props = {
  appendNumber: (value: string) => void
  addDecimal: () => void
  toggleSign: () => void
  clearDisplay: () => void
  chooseOperator: (op: string) => void
  calculate: () => void
}

export const Keyboard = (props: Props) => {
  const buttons = createButtons(props)
  return (
    <div className='grid'> {buttons.map(([label, action]) => (
        <Button key={label as string} label={label as string} onClick={action as () => void}/> ))}
    </div>
  )
}