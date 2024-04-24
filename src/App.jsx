import React from "react";
import BannerCard from "./Components/BannerCard";
import Bannerinfo from "./utils/BannerUtil";

const App = () => {
  return (
    <>

      <BannerCard
        title={Bannerinfo.naruto.Name}
        mycolor="#782DFF"
        from="#fccb90"
        to="#d57eeb"
        imgSrc={Bannerinfo.naruto.Img}
        quote={Bannerinfo.naruto.Quote}
        heading = {Bannerinfo.naruto.Heading}
      />
      <BannerCard
        title={Bannerinfo.sao.Name}
        mycolor="#c81325c9"
        from={Bannerinfo.sao.gradient.from}
        to={Bannerinfo.sao.gradient.to}
        imgSrc={Bannerinfo.sao.Img}
        quote={Bannerinfo.sao.Quote}
        heading = {Bannerinfo.sao.Heading}

      />
    </>
  );
};

export default App;
