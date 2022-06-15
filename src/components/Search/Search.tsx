import React from 'react'
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Search = () => {
  return (
    <form>
      <InputGroup size='xs'>
        <Input
          placeholder='Search movie'
          _placeholder={{ color: 'blackAlpha.500' }}
          focusBorderColor='deepLemon'
          color='blackAlpha.800'
          bgColor='eggshell'
          size='xs'
        />
        <InputRightElement>
          <IconButton
            variant='unstyled'
            aria-label='click to search'
            display='inline-flex'
            size='xs'
            color='deepLemon'
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default Search
