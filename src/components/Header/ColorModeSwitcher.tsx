import * as React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
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
  )
}
