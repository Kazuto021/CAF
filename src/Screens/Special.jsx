import React from 'react'
import { useState } from 'react'
import SpecialBannerCard from '../Components/SpecialBannerCard'
import Bannerinfo from '../utils/BannerUtil'

const Special = () => {
let animeList =  Object.keys(Bannerinfo)
console.log(animeList)
// let [currentIndex , setIndex] = useState[0]
let [currentAnime , setAnime] = useState(animeList[0])
// let currentAnime = "dbz"
  return (
    <>
      <SpecialBannerCard
        title={Bannerinfo[currentAnime].Name}
        mycolor="#c81325c9"
        degree={Bannerinfo[currentAnime].gradient.degree}
        from={Bannerinfo[currentAnime].gradient.from}
        startOpacity={Bannerinfo[currentAnime].gradient.startOpacity}
        endOpacity={Bannerinfo[currentAnime].gradient.endOpacity}
        to={Bannerinfo[currentAnime].gradient.to}
        imgSrc={Bannerinfo[currentAnime].Img}
        quote={Bannerinfo[currentAnime].Quote}
        heading={Bannerinfo[currentAnime].Heading}
      />
    </>
  )
}

export default Special