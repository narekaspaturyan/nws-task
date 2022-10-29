import { FC } from 'react'

import './styles.css'

interface LoadingProps {
  width?: number
  height?: number
  title?: string
}
const Loading: FC<LoadingProps> = ({ title, width = 70, height = 70 }) => {
  return (
    <div className="loading-wrapper">
      <div style={{ width, height }} className="loader simple-circle" />
      {title && <span>{title}</span>}
    </div>
  )
}

export default Loading
