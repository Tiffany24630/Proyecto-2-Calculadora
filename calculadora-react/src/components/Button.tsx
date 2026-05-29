type Props = {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <button
      type='button'
      aria-label={label}
      onClick={onClick}
      className='button'
    >
      {label}
    </button>
  )
}