import { FC } from 'react'

import './styles.css'

interface ImageWrapperProps {
  src: string
  alt: string
  width?: string
  height?: string
}

const ImageWrapper: FC<ImageWrapperProps> = ({
  src,
  alt,
  width = '250px',
  height = '250px',
}) => {
  return (
    <img
      className="custom-image"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default ImageWrapper
