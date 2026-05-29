type Props = {
  value: string
}

export const Display = ({ value }: Props) => {
  return (
    <div className='display'>
      {value}
    </div>
  )
}