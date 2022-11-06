import React from 'react'
import { Link } from 'react-router-dom'
import { RiMoonClearLine } from 'react-icons/ri'

import './NavTest.css'

const NavTest = () => {
  return <>
  <nav className='main-navigation-desktop'>
    <div className='main-navigation-desktop__left-container'>
      <h4 className='main-navigation-desktop__title'>
        <Link className='underline-effect' to='/'>FBartolo.dev</Link>
      </h4>
    </div>
    <ul>
      <li>
        <Link>About Me</Link>
      </li>
      <li>
        <Link>Skills</Link>
      </li>
      <li>
        <Link>Timeline</Link>
      </li>
    </ul>
    <div className='main-navigation-desktop__right-container'>
      <h4 className='main-navigation-desktop__theme'>
        <Link to='/'><RiMoonClearLine /></Link>
      </h4>
    </div>
  </nav>
  </>

}

export default NavTest