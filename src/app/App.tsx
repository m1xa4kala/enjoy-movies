import * as React from 'react'
import { ChakraProvider, VStack, Grid, Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header/Header'
import theme from '../theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container
        maxW={['sm', 'md', 'container.sm', 'container.md']}
        textAlign='center'
        fontSize='xl'
      >
        <Grid minH='100vh' p={3}>
          <VStack spacing={8}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route />
              <Route />
            </Routes>
          </VStack>
        </Grid>
      </Container>
    </ChakraProvider>
  )
}
