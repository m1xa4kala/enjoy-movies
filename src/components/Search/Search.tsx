import React from 'react'
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = () => {
  return (
    <form>
      <InputGroup size='sm'>
        <Input
          placeholder='Search movie'
          _placeholder={{ color: 'blackAlpha.500' }}
          focusBorderColor='deepLemon'
          color='blackAlpha.800'
          bgColor='eggshell'
          size='sm'
        />
        <InputRightElement>
          <IconButton
            variant='unstyled'
            aria-label='click to search'
            display='inline-flex'
            size='sm'
            color='deepLemon'
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default Search
