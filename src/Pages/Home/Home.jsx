import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import HomeCards from '../../Components/HomeCards/HomeCards'
import Motto from '../../Components/Motto/Motto'
import AllAgents from '../../Components/AllAgents/AllAgents'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <HomeCards/>
      <Motto/>
      <AllAgents/>
      <Footer/>
    </div>
  )
}

export default Home
