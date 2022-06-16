import React from 'react'
import {
  Box,
  Button,
  Container,
  DrawerOverlay,
  Flex,
  Link,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import Logo from '../Logo/Logo'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Link as RLink } from 'react-router-dom'
import Search from '../Search/Search'
import { HamburgerIcon } from '@chakra-ui/icons'
import Menu from './Menu/Menu'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <header>
      <Flex
        py={1}
        height='10'
        bg={useColorModeValue('raisinBlack', 'whiteAlpha.200')}
        alignItems='center'
      >
        <Container maxW={['sm', 'md', 'container.sm', 'container.md']}>
          <Flex w='full' alignItems='center'>
            <Link as={RLink} mr='1.5' to='/'>
              <Logo width={8} />
            </Link>
            <Button
              onClick={onOpen}
              mr='1.5'
              size='xs'
              fontSize='xs'
              aria-label='menu'
              variant='ghost'
              _hover={{ bg: 'whiteAlpha.200' }}
              color='eggshell'
              leftIcon={<HamburgerIcon fontSize='md' color='deepLemon' />}
            >
              Menu
            </Button>
            <Menu isOpen={isOpen} onClose={onClose}>
              <DrawerOverlay />
            </Menu>
            <Box mr='1.5' w='full'>
              <Search />
            </Box>
            <ColorModeSwitcher />
          </Flex>
        </Container>
      </Flex>
    </header>
  )
}

export default Header
