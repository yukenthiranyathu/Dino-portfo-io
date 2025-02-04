import React, { useState, useRef } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Navbar() {

  const [menu,SetMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }


  return (
    <div className = 'navbar'>
         <img src={logo} alt="Website Logo" className="navbar-logo" />
          <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <div className="navbar-links">
            <ul ref={menuRef} className="nav-menu">
              <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>SetMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>SetMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>SetMenu("projects")}>My Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>SetMenu("contact")}>Contact</p></AnchorLink></li>
        </ul></div>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
