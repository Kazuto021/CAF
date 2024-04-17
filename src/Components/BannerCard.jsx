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
                        <p>Quotes of the anime</p>
                    </section>
                    <img src="" alt="" />
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