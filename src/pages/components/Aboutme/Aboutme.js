import React from 'react'
import {FaLinkedin, FaGithub, FaFileDownload} from 'react-icons/fa'

import './Aboutme.css'

const LandingPage = () => {
  return <div className='landing-wrapper row'>
    <div className='landing__text col-md-6'>
      <h1 class="landing__text--main">Hello,</h1>
      <h3 class="landing__text--sub">My name is Flávio.</h3>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      <div class="landing__text--socials">
        <h4>Socials</h4>
        <FaLinkedin className='social' style={{color: '#0072b1'}}/>
        <FaGithub className='social'  style={{color: '#171515'}}/>
        <h4>Download my CV</h4>
        <FaFileDownload className='social' style={{color: '#E50914'}}/>
      </div>
    </div>
    <div className='landing__image col-md-6'>
      <img src='/assets/LandingPage/laptop.jpg' alt="landing page image" class="landing__image" />
    </div>
  </div>
}

export default LandingPage