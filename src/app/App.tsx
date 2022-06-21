import * as React from 'react'
import { ChakraProvider, Grid, Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header/Header'
import theme from '../theme'
import TopMovies from '../pages/TopMovies'
import TopTVs from '../pages/TopTVs'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container
        maxW={['sm', 'container.sm', 'container.md', 'container.lg']}
        textAlign='center'
        fontSize='xl'
      >
        <Grid minH='100vh' pt={3}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies-top100' element={<TopMovies />} />
            <Route path='/tvs-top100' element={<TopTVs />} />
          </Routes>
        </Grid>
      </Container>
    </ChakraProvider>
  )
}
