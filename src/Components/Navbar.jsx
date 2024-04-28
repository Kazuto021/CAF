import React from 'react'

import "./Styles/navbar.scss"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  let nav = useNavigate()
  const navigateToSpecial=()=>{
    nav("/special")
  }
  return (
    <>
      <nav className=''>
        <div className="site-info">
          <img className="logo" src="newLogo.png" alt="" />
          <div className="vertical-line"></div>
          <div className='site-name'>
            <h4>COLLAB SITE</h4>
          </div>
        </div>
        <div className="page-sections">
          <div className="page-section">Home</div>
          <div className="page-section">Wallpaper</div>
          <div className="page-section">Contact</div>
          <div className="page-section" onClick={navigateToSpecial}>Specials</div>
          <div className="page-section">More</div>

        </div>
      </nav>
    </>
  )
}

export default Navbar