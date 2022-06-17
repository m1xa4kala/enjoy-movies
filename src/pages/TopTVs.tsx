import React from 'react'
import TVs from '../mock/top100TVs.json'
import TopList from '../components/TopList/TopList'

const TopTVs = () => {
  const { items } = TVs
  return <TopList items={items} />
}

export default TopTVs
