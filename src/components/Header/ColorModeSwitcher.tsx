import * as React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          size='xs'
          fontSize='md'
          variant='ghost'
          colorScheme={useColorModeValue('purple', 'orange')}
          marginLeft='2'
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          aria-label={`Switch to ${text} mode`}
          {...props}
        />
      </motion.div>
    </AnimatePresence>
  )
}
