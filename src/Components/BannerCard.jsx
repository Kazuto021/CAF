import React from 'react'
import "./Styles/bannerCard.scss"
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
const BannerCard = (props) => {
    console.log("if undefined is occuring after this text then u havent attached imgSrc prop to the bannerCard component",props.imgSrc)
    return (
        <div className="wrapper">
            <div className='banner-card' style={{"backgroundColor":props.mycolor,
        "background-image": `linear-gradient(120deg, ${props.from} 0%, ${props.to} 100%)`        }}>
                <header>
                    <h5>{props.title}</h5>
                    <div>≡</div>
                </header>
                <main className='main-content'>
                    {/* <img src="src\assets\kirito-noscreen.png" alt="" /> */}
                    <img src={(props.imgSrc == undefined || props.imgSrc == "") ?("/kirito-noscreen.png"):(props.imgSrc)} alt="" />
                    <section>
                        <p>{props.heading}</p>
                    </section>
                    <section className='anime-quote'>
                        <h4>{props.quote}</h4>

                    </section>

                    {/* <img src="src\assets\anigirl.png" alt="" /> */}
                </main>
                <footer>
                    <div className="logos">
                        <FaInstagram />
                        <FaDiscord />
                    </div>
                    <div className="down-arrow">

                        <FaArrowDown />
                    </div>

                </footer>
            </div>
        </div>
    )
}

export default BannerCard