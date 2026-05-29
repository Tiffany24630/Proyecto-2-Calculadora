type Props = {
  value: string
}

export const Display = ({ value }: Props) => {
  return (
    <div
      className='display'
      aria-live='polite'
      aria-label='calculator display'
    >
      {value}
    </div>
  )
}