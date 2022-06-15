import React from 'react'
import { Heading, Table, Tbody, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import movies from '../../mock/top250movies.json'
import TopItem from './TopItem/TopItem'

const TopList: React.FC = () => {
  const { items } = movies
  return (
    <>
      <Heading as='h2' alignSelf='flex-start'>
        Top 250 Movies
      </Heading>
      <Table variant='striped' colorScheme={useColorModeValue('blackAlpha', 'gray')}>
        <Thead bgColor={useColorModeValue('raisinBlack', 'whiteAlpha.200')}>
          <Tr>
            <Th color={useColorModeValue('eggshell', 'deepLemon')}>Rank</Th>
            <Th></Th>
            <Th color={useColorModeValue('eggshell', 'deepLemon')}>Title</Th>
            <Th color={useColorModeValue('eggshell', 'deepLemon')}>Rate</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map(movie => (
            <TopItem key={movie.id} movie={movie} />
          ))}
        </Tbody>
      </Table>
    </>
  )
}

export default TopList
