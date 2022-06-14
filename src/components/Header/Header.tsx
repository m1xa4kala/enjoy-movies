import React from 'react'
import { Box, Container, Flex, Spacer, useColorModeValue } from '@chakra-ui/react'
import Logo from '../Logo/Logo'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box py={2} bg={useColorModeValue('#282a35', 'whiteAlpha.200')}>
      <Container maxW='container.lg'>
        <nav>
          <Flex maxW='container.lg'>
            <Link to='/'>
              <Logo />
            </Link>
            <Spacer />
            <ColorModeSwitcher />
          </Flex>
        </nav>
      </Container>
    </Box>
  )
}

export default Header
