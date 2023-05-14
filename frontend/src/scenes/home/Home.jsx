import React from 'react'
import MainHero from './MainHero'
import ItemList from './ItemList'
import Subscribe from './Subscribe'

const Home = () => {
  return (
    <div className="main-hero">
      <MainHero />
      <ItemList />
      <Subscribe />
    </div>
  )
}

export default Home
