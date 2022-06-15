import { StarIcon } from '@chakra-ui/icons'
import { Box, Center, Heading, HStack, Image, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'
interface ITopItem {
  movie: {
    id: string
    rank: string
    title: string
    fullTitle: string
    year: string
    image: string
    crew: string
    imDbRating: string
    imDbRatingCount: string
  }
}
const TopItem: React.FC<ITopItem> = ({ movie }) => {
  return (
    <Tr>
      <Td w='20'>
        <Center>{movie.rank}</Center>
      </Td>
      <Td>
        <Box>
          <Image src={movie.image} maxW='24' />
        </Box>
      </Td>
      <Td w='full'>
        <Heading as='h3' fontSize='md'>
          {movie.fullTitle}
        </Heading>
        <br />
        <Text fontSize='sm'>{movie.crew}</Text>
      </Td>
      <Td>
        <HStack>
          <StarIcon fontSize='sm' color='deepLemon' />
          <Text fontSize='sm'>{movie.imDbRating}</Text>
        </HStack>
      </Td>
    </Tr>
  )
}

export default React.memo(TopItem)
