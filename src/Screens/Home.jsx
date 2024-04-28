import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Bannerinfo from '../utils/BannerUtil'

import { FaArrowRight } from "react-icons/fa";

import "./Styles/homescreen.scss"

import Content from '../Components/Content'
const Home = () => {
  let animeList = Object.keys(Bannerinfo)
  let [currentAnime, setAnime] = useState(animeList[0])
  // document.addEventListener("DOMContentLoaded",(e)=>{
  //   console.log(currentAnime);
  //   setAnime(animeList[0])
  //   setIndex(currentIndex+1)
  // })
  
  let [currentIndex,setIndex]=useState(0)
  
  const nextAnime=()=>{
    console.log(currentIndex);
    console.log(currentAnime);
    if (currentIndex<animeList.length){
      // console.log("working inside if loop")
      let animeName = animeList[currentIndex]
      setAnime(animeName)
      // console.log(currentAnime)
      // console.log(currentIndex)
      setIndex(currentIndex+1)
      // console.log(currentAnime)
      // return (animeName)
    }
    else{

      setIndex(0)
      setAnime(animeList[0])
    }
  }
  return (
    <div className='home-wrapper' style={{ 'backgroundImage': `url(${Bannerinfo[currentAnime].BodyBg})` }}>
      <Navbar />
      <div className='main-div-wrapper'>
        <Content
          bgImg={Bannerinfo[currentAnime].CardBgImg}
          name={Bannerinfo[currentAnime].Name} />
      </div>
      <div className='controllers'>
        <div className="right-arrow" onClick={nextAnime}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  )
}

export default Home