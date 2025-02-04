import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="Website Profile" className="hero-profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a motivated BSc Computer Science undergraduate
 with a solid foundation in programming languages like C++,
 Java, Python, and web development skills including HTML,
 CSS, JavaScript, and PHP.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React js, Node js & Express js</p></div>
                    <div className="about-skill"><p>MySQL & MongoDB</p></div>
                    <div className="about-skill"><p>C++, java & Python</p></div>
                    <div className="about-skill"><p>HTML, CSS & JS</p></div> 

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Certification</h1>
                <p> Python Programming Completed On Udemy</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Languages</h1>
                <p>English & Tamil</p>
            </div>
        </div>
    </div>
  )
}

export default About