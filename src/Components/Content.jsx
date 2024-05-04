import React from 'react'
import { FaRegBookmark } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa";

import "./Styles/content.scss"
const Content = (props) => {
    return (
        <div className='content-wrapper'>
            <div className='anime-info'>
                <h1>
                    {/* {console.log(typeof(props.name))} */}
                    {(props.name).toUpperCase()}
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, rem aliquid dignissimos quod doloremque pariatur cumque magnam consequatur tempora architecto vero iste nam consequuntur suscipit magni, aut mollitia consectetur illum.
                </p>
                <div className="others">
                    <div className='bookmark'>
                        <FaRegBookmark />
                    </div>
                    <div className='explore'>Explore anime</div>
                </div>
            </div>
            <div className='carousel-wrapper'>
                <div className='carousel'>
                    <h2 className='currently-showing'>Currently Viewing</h2>
                    <div id="current-card" className='current-card border-grow' style={{"backgroundImage":`url(${props.bgImg})`}}></div>
                    
                </div>
            </div>

        </div>
    )
}

export default Content