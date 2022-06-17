import React from 'react'
import movies from '../mock/top100movies.json'
import TopList from '../components/TopList/TopList'

const TopMovies: React.FC = () => {
  const { items } = movies
  return <TopList items={items} title='Top 100 Movies' />
}

export default TopMovies
