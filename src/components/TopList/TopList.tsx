import React from 'react'
import { Heading, Table, Tbody, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import TopItem from './TopItem/TopItem'
import { ITopItem } from '../../models/top-item'

interface ITopListProps {
  items: ITopItem[]
  title: string
}

const TopList: React.FC<ITopListProps> = ({ items, title }) => {
  return (
    <>
      <Heading as='h2' textAlign='left' mb='2'>
        {title}
      </Heading>
      <Table
        size={['sm', 'sm', 'md']}
        variant='striped'
        colorScheme={useColorModeValue('blackAlpha', 'gray')}
      >
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
            <TopItem
              key={movie.id}
              rank={movie.rank}
              image={movie.image}
              fullTitle={movie.fullTitle}
              crew={movie.crew}
              imDbRating={movie.imDbRating}
            />
          ))}
        </Tbody>
      </Table>
    </>
  )
}

export default TopList
