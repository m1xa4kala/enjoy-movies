import { StarIcon } from '@chakra-ui/icons'
import { Box, Center, Heading, HStack, Image, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'
import { ITopItem } from '../../../models/top-item'

const TopItem: React.FC<ITopItem> = ({ rank, image, fullTitle, crew, imDbRating }) => {
  return (
    <Tr>
      <Td w='20'>
        <Center>{rank}</Center>
      </Td>
      <Td>
        <Box>
          <Image src={image} maxW='24' />
        </Box>
      </Td>
      <Td w='full'>
        <Heading as='h3' fontSize='md'>
          {fullTitle}
        </Heading>
        <br />
        <Text fontSize='sm'>{crew}</Text>
      </Td>
      <Td>
        <HStack>
          <StarIcon fontSize='sm' color='deepLemon' />
          <Text fontSize='sm'>{imDbRating}</Text>
        </HStack>
      </Td>
    </Tr>
  )
}

export default React.memo(TopItem)
