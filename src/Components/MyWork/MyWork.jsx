import React from 'react'
import './MyWork.css'
import pr1 from '../../assets/pr1.png'
import pr2 from '../../assets/pr2.jpg'

function MyWork() {
  return (
    <div id='projects' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
        </div >
        <div className='container'>
        <div className="mywork-container">
        <img src={pr1} alt="" className='mywork-project01' />
        <div className="mywork-para">
        <p>An E-commerce website project, Trend, a platform dedicated to dog products. This project has been an incredible journey, and I’m proud to have built it using HTML, CSS, and JavaScript.</p>
        </div>
        
        </div>
        <div className="mywork-container2">
        <img src={pr2} alt="" className='mywork-project02' />
        <div className="mywork-para2">
        <p>Voice Call App with Emotion Detection 
        A Flutter and Python-based mobile application that analyzes voice signals in real-time during calls to detect emotions, enhancing emotional awareness and communication.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default MyWork
