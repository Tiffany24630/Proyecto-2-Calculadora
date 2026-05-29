type Props = {
  appendNumber: (value: string) => void
  addDecimal: () => void
  toggleSign: () => void
  clearDisplay: () => void
  chooseOperator: (op: string) => void
  calculate: () => void
}

export const createButtons = ({
  appendNumber,
  addDecimal,
  toggleSign,
  clearDisplay,
  chooseOperator,
  calculate
}: Props) => [
  ['C', clearDisplay],
  ['+/-', toggleSign],
  ['%', () => chooseOperator('%')],
  ['÷', () => chooseOperator('÷')],
  ['7', () => appendNumber('7')],
  ['8', () => appendNumber('8')],
  ['9', () => appendNumber('9')],
  ['×', () => chooseOperator('×')],
  ['4', () => appendNumber('4')],
  ['5', () => appendNumber('5')],
  ['6', () => appendNumber('6')],
  ['-', () => chooseOperator('-')],
  ['1', () => appendNumber('1')],
  ['2', () => appendNumber('2')],
  ['3', () => appendNumber('3')],
  ['+', () => chooseOperator('+')],
  ['0', () => appendNumber('0')],
  ['.', addDecimal],
  ['=', calculate]
]