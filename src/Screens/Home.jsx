import React from 'react'
import SpecialBannerCard from '../Components/SpecialBannerCard'
import Bannerinfo from '../utils/BannerUtil'

const Home = () => {
  return (
    <>
    <SpecialBannerCard
        title={Bannerinfo.dbz.Name}
        mycolor="#c81325c9"
        degree={Bannerinfo.dbz.gradient.degree}
        from={Bannerinfo.dbz.gradient.from}
        startOpacity={Bannerinfo.dbz.gradient.startOpacity}
        endOpacity={Bannerinfo.dbz.gradient.endOpacity}
        to={Bannerinfo.dbz.gradient.to}
        imgSrc={Bannerinfo.dbz.Img}
        quote={Bannerinfo.dbz.Quote}
        heading={Bannerinfo.dbz.Heading}
      />
    
    </>
  )
}

export default Home