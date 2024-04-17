import React from 'react'
import "./Styles/bannerCard.scss"
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
const BannerCard = () => {
    return (
        <div className="wrapper">
            <div className='banner-card'>
                <header>
                    <h5>NAME OF THE ANIME</h5>
                    <div>≡</div>
                </header>
                <main className='main-content'>
                    <section>
                        <p>4 or more words</p>
                    </section>
                    <section>
                        <h4>Quotes of the anime</h4>
                    </section>
                    <img src="src\assets\kirito-noscreen.png" alt="" />
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