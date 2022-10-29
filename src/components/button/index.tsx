import { FC, ReactElement, MouseEvent } from 'react'
import './styles.css'

interface ButtonProps {
  name?: string | ReactElement
  noBackground?: boolean
  secondary?: boolean
  disabled?: boolean
  loading?: boolean
  className?: string
  children?: ReactElement
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  active?: boolean
}

const Button: FC<ButtonProps> = ({
  name,
  noBackground,
  disabled,
  children,
  className,
  onClick,
  active,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`custom-button ${className || ''} ${
      noBackground ? 'no-background' : ''
    }  ${disabled ? 'disabled' : ''} ${active ? 'active' : ''}`}
  >
    {children || (
      <>
        <span>{name}</span>
      </>
    )}
  </button>
)

export default Button
