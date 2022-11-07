import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { RiMoonClearLine } from 'react-icons/ri'
import { BsSun } from 'react-icons/bs'

import './NavTest.css'

const NavTest = () => {

  const [dayIcon, setDayIcon] = useState(true)
  const [langPT, setLangPT] = useState(true)

  const toggleDayNight = () => {
    setDayIcon(!dayIcon)
  }

  const toggleLang = () => {
    setLangPT(!langPT)
  }

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
        <ul>
          <li>
            <Link onClick={toggleLang}> 
              {langPT ?  'PT' :  'EN' }
            </Link>
          </li>
          <li>
            <Link onClick={toggleDayNight}>
              {dayIcon ?  <RiMoonClearLine /> :  <BsSun />}
            </Link>
          </li>
        </ul>
    </div>
  </nav>
  </>

}

export default NavTest