import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { RiMoonClearLine } from 'react-icons/ri'
import { BsSun } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

import './MainNavigation.css'

const NavTest = () => {

  const [dayIcon, setDayIcon] = useState(true)
  const [langPT, setLangPT] = useState(true)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleDayNight = () => {
    setDayIcon(!dayIcon)
  }

  const toggleLang = () => {
    setLangPT(!langPT)
  }

  const mobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu)
    
    console.log(showMobileMenu)
  }
  
  return <>
  <nav className='navigation'>
    <div className='navigation__title--container'>
      <h4 className='navigation__title'>
        <Link className='underline-effect' to='/'>FBartolo.dev</Link>
      </h4>
    </div>
    <ul className={showMobileMenu ? 'nav-menu active' : 'nav-menu '}>
      <li>
        <Link>About Me</Link>
      </li>
      <li>
        <Link>Skills</Link>
      </li>
      <li>
        <Link>Timeline</Link>
      </li>
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
    <div className='mobile-icon'>
      <FaBars onClick={mobileMenuToggle}/>
    </div>
  </nav>
  </>

}

export default NavTest