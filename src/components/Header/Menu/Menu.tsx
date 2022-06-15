import { CloseIcon } from '@chakra-ui/icons'
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerProps,
  Flex,
  IconButton,
  Spacer,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Logo/Logo'

const Menu: React.FC<DrawerProps> = ({ onClose, isOpen }) => {
  return (
    <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
      <DrawerContent>
        <Container maxW='container.md'>
          <DrawerHeader>
            <Flex>
              <Link to='/'>
                <Logo width={10} height={12} />
              </Link>
              <Spacer/>
              <IconButton
                onClick={onClose}
                variant='ghost'
                color='deepLemon'
                aria-label='close menu'
                icon={<CloseIcon />}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Link to='/top'>Top 250 Movies</Link>
          </DrawerBody>
        </Container>
      </DrawerContent>
    </Drawer>
  )
}

export default Menu
