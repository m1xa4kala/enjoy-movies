import React from 'react'
import TVs from '../mock/top100TVs.json'
import TopList from '../components/TopList/TopList'

const TopTVs = () => {
  const { items } = TVs
  return <TopList items={items} title='Top 100 TVs'/>
}

export default TopTVs
