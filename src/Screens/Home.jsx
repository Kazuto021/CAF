import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Bannerinfo from "../utils/BannerUtil";
import HomePageInfo from "../utils/LandingPageUtil";
import { FaArrowRight } from "react-icons/fa";

import "./Styles/homescreen.scss";

import Content from "../Components/Content";
import WaterMark from "../Components/WaterMark";

const Home = () => {
  let animeList = Object.keys(Bannerinfo);
  let firstView = Object.keys(HomePageInfo)[0]
  let [currentAnime, setAnime] = useState(firstView);
  let [currentIndex, setIndex] = useState(0);
  let ref = document.getElementById("current-card");
  var [hovering, setHover] = useState(true);

  // useEffect(() => {
  //   if (hovering === false) {
  //     let classLi = ref.classList.value.split(" ");
  //     if (async () => { return await classLi.find((e) => e === "border-grow") }) {
  //       console.log("border-grow class is present");
  //       // classLi.pop("border-grow");
  //       ref.className = "current-card"

  //       console.log(ref.classList);
  //     }
  //     console.log(`inside use effect: ${hovering}`);
  //   }
  //   else {
  //     console.log("inside else")
  //     // YE EK CALLBACK FUNCTION TO CALL KAR RAH H KYOKI JO UPER IF ME FUNCTION H VO EK ASYNC FUNCTION H 
  //     // AND VO ASYNC FUNCTION KA KOI PATA NAHI H KI KAB RETURN KAREGA VALUE SO AAGE KE ELSE KE FUNCTION KO BHI 
  //     // APNA FUTURE TASK KO DEKHTE HUE CHALNA PADEGA AND HENCE IT WILL ALSO USE ASYNC . 
  //     async () => {
  //       let classLi = await ref.classList.value.split(" ");
  //       // YAHA REF VARIALBLE JO H VO USE AA RAH H A
  //       // console.log(await classLi.find((e) => {e !== "border-grow"}))
  //       // if (classLi.find((e) => {
  //       //   e !== "border-grow"
  //       // })) {
  //         ref.className += " border-grow"
  //         console.log(ref.classList)
  //       // }
  //       console.log(classLi)
  //     }


  //     console.log(`inside use effect: ${hovering}`);
  //   }
  // }, [hovering]);

  const nextAnime = () => {
    // console.log("Calling perfectly");
    console.log(animeList);
    console.log(animeList.length)
    if (currentIndex === 0) {
      setIndex(currentIndex+1);
      let animeName = animeList[currentIndex];
      setAnime(animeName);

      console.log("index after changing: ", currentIndex);
    } else if (currentIndex>=1  && currentIndex < animeList.length) {
      console.log("index before changing: ", currentIndex);
      let animeName = animeList[currentIndex];
      setAnime(animeName);
      setIndex(currentIndex + 1);

    } else {
      setIndex(0);
      setAnime(firstView);
    }
    console.log("-----:",currentIndex)
  };

  const hoverTranslate = () => {
    // console.log(ref)
    // useEffect(() => {
    //   ref.style.transform = "translate(0,-1rem)"
    //   let classLi = ref.classList.value.split(" ")
    //   if (classLi.length > 1) {
    //     // console.log("border-grow" in classLi)
    //     if ("border-grow" in classLi) {
    //       console.log("something")
    //     }
    //     else {
    //       ref.className += " border-grow"
    //       console.log(ref.classList.value)
    //     }
    //   }
    // }, [])
    // if (".border-grow" in classLi){
    // }
    // ref.style.border
    // ref.style.transformOrigin="center"
    // ref.style.borderBottomWidth="100%"
    // ref.style.borderBottomColor="red"
    // ref.style.borderBottom
    
    let ref = document.getElementById("current-card");
    ref.style.transform = "translate(0,-1rem)";

    // document.getElementById("current-card").style.borderBottom = "5px solid red"
  };
  // const isHovering = () => {
  //   setHover(true);

  //   // console.log(hovering)
  // };
  // const hoverOut = () => {
  //   setHover(false);
  //   // console.log(`Hovered out :${hovering}`)
  // };
  const hoverOutTranslate = () => {
    document.getElementById("current-card").style.transform =
      "translate(0,0rem)";
    // document.getElementById("current-card").style.border = "none";
  };
  return (
    currentAnime !== "caf" ?(
      <div
      className="home-wrapper"
      style={{ backgroundImage: `url(${Bannerinfo[currentAnime].BodyBg})` }}
    >
      <Navbar />
      <div className="main-div-wrapper">
        <Content
          bgImg={Bannerinfo[currentAnime].CardBgImg}
          name={Bannerinfo[currentAnime].Name}
        />
      </div>
      <div className="controllers">
        <div
          className="right-arrow"
          onClick={nextAnime}
          onMouseEnter={hoverTranslate}
          onMouseLeave={hoverOutTranslate}
        >
          <FaArrowRight />
        </div>
      </div>
      <WaterMark />
    </div>
    
    ):
    (<div
      className="home-wrapper"
      style={{ backgroundImage: `url(${HomePageInfo[currentAnime].BodyBg})` }}
    >
      <Navbar />
      <div className="main-div-wrapper">
        <Content
          bgImg={HomePageInfo[currentAnime].CardBgImg}
          name={HomePageInfo[currentAnime].Name}
        />
      </div>
      <div className="controllers">
        <div
          className="right-arrow"
          onClick={nextAnime}
          onMouseEnter={hoverTranslate}
          onMouseLeave={hoverOutTranslate}
        >
          <FaArrowRight />
        </div>
      </div>
      <WaterMark />
    </div>)
  );
};

export default Home;
