import React from 'react'
import { Image, ImageProps } from '@chakra-ui/react'

const Logo: React.FC<ImageProps> = ({ width = 7, height = 6 }) => {
  return <Image width={width} height={height} src='logo192.png' />
}

export default Logo
