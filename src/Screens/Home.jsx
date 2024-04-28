import React from 'react'
import Navbar from '../Components/Navbar'
import Bannerinfo from '../utils/BannerUtil'
import "./Styles/homescreen.scss"

import Content from '../Components/Content'
const Home = () => {
  
  return (
    <div className='home-wrapper' style={{'backgroundImage':`url(${Bannerinfo.jjk.BodyBg})`}}>
      <Navbar />
      <div className='main-div-wrapper'>
        <Content
          bgImg={Bannerinfo.jjk.CardBgImg}
          name={Bannerinfo.jjk.Name} />
      </div>
    </div>
  )
}

export default Home