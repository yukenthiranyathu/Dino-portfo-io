import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'; 

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Website Profile" className="hero-profile" />
        <h1><span>I'm Dinogitha Koneswaran,</span> Web Developer.</h1>
        <p> I am a BSc Computer Science undergraduate .</p>
    <div className="hero-action">
    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    <div className="hero-resume">
    <a href="/resume.pdf" download="Dinogitha_Koneswaran_Resume.pdf">
                    My Resume
                </a>
    </div>
    </div>
    </div>
  )
}

export default Hero