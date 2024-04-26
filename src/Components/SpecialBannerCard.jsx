import React, { useState } from 'react'
import "./Styles/special.scss"
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
// import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const SpecialBannerCard = (props) => {
    let [mouseX, setMouseX] = useState(0)
    let [mouseY, setMouseY] = useState(0)

    // let divFollower = document.getElementsByClassName("cursor-follower")[0]
    const ref = document.querySelector(".cursor-follower")
    const applyFillAnimation = () => {
        let names = document.getElementById("spc-banner").className
        let flag = 0;
        if (names.length > 1) {
            let i = 0;
            let clsName = names.split(" ")
            for (i in clsName.length) {
                if ("fill-animation-class" === clsName[i]) {
                    flag = 1;
                    break;
                }
            }
        }
        if (flag === 0) {
            document.getElementById("spc-banner").classList.add("fill-animation-class");
        }

    }
    const mouseMovement = (e) => {
        let divFollower = document.getElementsByClassName("cursor-follower")[0]

        divFollower.style.transform = "scale(0.8)";
        // console.log(e)
        setMouseX(() => {
            return e.clientX;
        })
        setMouseY(() => {
            return e.clientY;
        })
        ref.style.left = (mouseX) - 80 + "px";
        ref.style.top = (mouseY) - 80 + "px";

    }
    const scalingDown=()=>{
        let divFollower = document.getElementsByClassName("cursor-follower")[0]

        divFollower.style.transform = "scale(0.1)";
        divFollower.style.transition = "0.2s";
    }
    // console.log("if undefined is occuring after this text then u havent attached imgSrc prop to the bannerCard component", props.imgSrc)
    return (
        <div className="special-wrapper" >
            <div className='cursor-follower'> </div>
            <div id="spc-banner" className='special-banner-card' onMouseMove={mouseMovement} onMouseLeave={scalingDown}
                style={{
                    "b ackgroundColor": props.mycolor,
                    "background-image": `linear-gradient(${props.degree}, ${props.from} ${props.startOpacity}%, ${props.to} ${props.endOpacity}%)`
                }}>
                <header>
                    <h5>{props.title}</h5>
                    <div>≡</div>
                </header>
                <main className='special-main-content'>
                    {/* <img src="src\assets\kirito-noscreen.png" alt="" /> */}
                    <img className="special-img" src={(props.imgSrc == undefined || props.imgSrc == "") ? ("/kirito-noscreen.png") : (props.imgSrc)} alt="" />
                    <section className='special-heading'>
                        <p>{props.heading}</p>
                    </section>
                    <section className='special-anime-quote'>
                        <h4>{props.quote}</h4>

                    </section>

                    {/* <img src="src\assets\anigirl.png" alt="" /> */}
                </main>
                <footer>
                    <div className="special-footer-element">
                        <div className="special-down-arrow" onClick={applyFillAnimation}>
                            {/* <FaArrowLeft /> */}
                            <FaRegMoon />
                        </div>
                        <div className="special-logos">

                            <FaInstagram />
                            <FaDiscord />
                        </div>

                    </div>

                    <div className="special-down-arrow special-footer-element" >
                        <FaArrowRight />

                    </div>

                </footer>
            </div >
            <div className='copyright'>Designed and Created by Kazu.</div>
        </div >
    )
}

export default SpecialBannerCard