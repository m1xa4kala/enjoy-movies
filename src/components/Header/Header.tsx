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
  chakra,
} from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Search from '../Search/Search'
import Logo from '../Logo/Logo'
import Menu from './Menu/Menu'

const Navbar = chakra('header')

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Navbar
      bg={useColorModeValue('raisinBlack', 'whiteAlpha.200')}
      py={1}
      height='56px'
      display='flex'
      alignItems='center'
    >
      <Container maxW={['sm', 'container.sm', 'container.md', 'container.lg']}>
        <Flex w='full' alignItems='center'>
          <Link display={['none', 'block']} as={RLink} mr='1.5' to='/'>
            <Logo width={10} height={8} />
          </Link>
          <Button
            onClick={onOpen}
            mr='1.5'
            size='md'
            fontSize='md'
            aria-label='menu'
            variant='ghost'
            _hover={{ bg: 'whiteAlpha.200' }}
            color='eggshell'
            leftIcon={<HamburgerIcon mt='-0.5' fontSize='lg' color='deepLemon' />}
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
    </Navbar>
  )
}

export default Header
