import { CloseIcon } from '@chakra-ui/icons'
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerProps,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Spacer,
  Link,
  Icon,
} from '@chakra-ui/react'
import { FaTv, FaVideo } from 'react-icons/fa'
import { RiMovie2Line } from 'react-icons/ri'
import React from 'react'
import { Link as RLink } from 'react-router-dom'
import Logo from '../../Logo/Logo'

const Menu: React.FC<DrawerProps> = ({ onClose, isOpen }) => {
  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerContent>
        <Container maxW='container.md'>
          <DrawerHeader>
            <Flex>
              <RLink to='/'>
                <Logo width={14} height={12} />
              </RLink>
              <Spacer />
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
            <nav>
              <Flex flexDirection='column'>
                <Flex align='center'>
                  <Heading size='md' mr='1.5' as='h3'>
                    Movies
                  </Heading>
                  <Icon color='deepLemon' mb='-0.5' fontSize='xl' as={FaVideo} />
                </Flex>
                <List mb='6'>
                  <ListItem>
                    <Link as={RLink} to='/movies-top100'>
                      Top 100 Movies
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RLink} to='/movies-popular'>
                      Most Popular Movies
                    </Link>
                  </ListItem>
                  <ListItem></ListItem>
                </List>
                <Flex align='center'>
                  <Heading size='md' mr='1.5' as='h3'>
                    TVs
                  </Heading>
                  <Icon color='deepLemon' fontSize='xl' as={FaTv} />
                </Flex>
                <List mb='6'>
                  <ListItem>
                    <Link as={RLink} to='/tvs-top100'>
                      Top 100 TVs
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RLink} to='/tvs-popular'>
                      Most Popular TVs
                    </Link>
                  </ListItem>
                  <ListItem></ListItem>
                </List>
                <Flex align='center'>
                  <Heading size='md' mr='1.5' as='h3'>
                    Other
                  </Heading>
                  <Icon color='deepLemon' mb='-0.5' fontSize='xl' as={RiMovie2Line} />
                </Flex>
                <List mb='6'>
                  <ListItem>
                    <Link as={RLink} to='/box-office-top'>
                      Top Box Office
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RLink} to='/movies-intheaters'>
                      In Theaters
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RLink} to='/movies-comingsoon'>
                      Coming Soon
                    </Link>
                  </ListItem>
                </List>
              </Flex>
            </nav>
          </DrawerBody>
        </Container>
      </DrawerContent>
    </Drawer>
  )
}

export default Menu
