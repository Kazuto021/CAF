import React from "react";
import BannerCard from "./Components/BannerCard";
import Bannerinfo from "./utils/BannerUtil";

const App = () => {
  return (
    <>

      <BannerCard
        title={Bannerinfo.naruto.Name}
        mycolor="#782DFF"

        degree={Bannerinfo.naruto.gradient.degree}

        from={Bannerinfo.naruto.gradient.from}
        to={Bannerinfo.naruto.gradient.to}
        startOpacity={Bannerinfo.naruto.gradient.startOpacity}
        endOpacity={Bannerinfo.naruto.gradient.endOpacity}
        imgSrc={Bannerinfo.naruto.Img}
        quote={Bannerinfo.naruto.Quote}
        heading={Bannerinfo.naruto.Heading}
      />
      <BannerCard
        title={Bannerinfo.sao.Name}
        mycolor="#c81325c9"
        degree={Bannerinfo.sao.gradient.degree}
        from={Bannerinfo.sao.gradient.from}
        startOpacity={Bannerinfo.sao.gradient.startOpacity}
        endOpacity={Bannerinfo.sao.gradient.endOpacity}
        to={Bannerinfo.sao.gradient.to}
        imgSrc={Bannerinfo.sao.Img}
        quote={Bannerinfo.sao.Quote}
        heading={Bannerinfo.sao.Heading}

      />
      <BannerCard
        title={Bannerinfo.jjk.Name}
        mycolor="#c81325c9"
        degree={Bannerinfo.jjk.gradient.degree}
        from={Bannerinfo.jjk.gradient.from}
        startOpacity={Bannerinfo.jjk.gradient.startOpacity}
        endOpacity={Bannerinfo.jjk.gradient.endOpacity}
        to={Bannerinfo.jjk.gradient.to}
        imgSrc={Bannerinfo.jjk.Img}
        quote={Bannerinfo.jjk.Quote}
        heading={Bannerinfo.jjk.Heading}
      />

      <BannerCard
        title={Bannerinfo.onepiece.Name}
        mycolor="#c81325c9"
        degree={Bannerinfo.onepiece.gradient.degree}
        from={Bannerinfo.onepiece.gradient.from}
        startOpacity={Bannerinfo.onepiece.gradient.startOpacity}
        endOpacity={Bannerinfo.onepiece.gradient.endOpacity}
        to={Bannerinfo.onepiece.gradient.to}
        imgSrc={Bannerinfo.onepiece.Img}
        quote={Bannerinfo.onepiece.Quote}
        heading={Bannerinfo.onepiece.Heading}

      />
    </>
  );
};

export default App;
