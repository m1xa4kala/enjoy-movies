import React from 'react'
import { Image, ImageProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Logo: React.FC<ImageProps> = ({ width = 7, height = 6 }) => {
  return (
    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
      <Image width={width} height={height} src='logo192.png' />
    </motion.div>
  )
}

export default Logo
