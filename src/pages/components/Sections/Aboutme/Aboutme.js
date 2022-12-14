import React from 'react'
import {FaLinkedin, FaGithub, FaFileDownload} from 'react-icons/fa'

import './Aboutme.css'

const LandingPage = () => {
  return <div className='landing-wrapper row' id='about'>
    <div className='landing__text col-lg-6'>
      <h1 className="landing__text--main">Hello,</h1>
      <h3 className="landing__text--sub">My name is Flávio, how are you?</h3>
      <p>I'm a full-stack software developer based in Aveiro, Portugal.</p>
      <p>Currently working professionally as a python developer although lately im focused in getting to know more about the MERN ecosystem.</p>
      <p>I work on different web projects in my free time in order to develop and learn new skills.</p>
      <p>Beyond work, I love being outside and get to know new places.</p>
      <div className="landing__text--socials">
        <h5>Socials</h5>
        <FaLinkedin className='social' style={{color: '#0072b1'}}/>
        <FaGithub className='social'  style={{color: '#171515'}}/>
        <h5>Download my CV</h5>
        <FaFileDownload className='social' style={{color: '#E50914'}}/>
      </div>
    </div>
    <div className='landing__image col-lg-6'>
      <img src='/assets/LandingPage/laptop.jpg' alt="landing page image" className="landing__image" />
    </div>
  </div>
}

export default LandingPage