import React from 'react'
import Navbar from '../Components/Navbar'

import "./Styles/homescreen.scss"

import Content from '../Components/Content'
const Home = () => {
  return (
    <div className='home-wrapper'>
      <Navbar/>
      <div className='main-div-wrapper'>
        <Content/>      
      </div>
    </div>
  )
}

export default Home