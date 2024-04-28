import React from 'react'
// import { CiBookmark } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
import "./Styles/content.scss"
const Content = () => {
    return (
        <div className='content-wrapper'>
            <div className='anime-info'>
                <h1>
                    BOKU NO HERO ACADEMIA
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, rem aliquid dignissimos quod doloremque pariatur cumque magnam consequatur tempora architecto vero iste nam consequuntur suscipit magni, aut mollitia consectetur illum.
                </p>
                <div className="others">
                    <div className='bookmark'>
                        {/* <CiBookmark /> */}
                        <FaRegBookmark/>
                    </div>
                    <div className='explore'>Explore anime</div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Content