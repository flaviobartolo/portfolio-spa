import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import './MainNavigation.css'


const MainNavigation = () => {

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return <>
    <MainHeader>
      <button className='main-navigation__menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <h4 className='main-navigation__title'>
        <Link to='/' onClick={goTop}>FBartolo.dev</Link>
      </h4>
      <nav className='main-navigation__header-nav'>
        <ul className='nav-links'>
          <li>
            A
          </li>
          <li>
            B
          </li>
        </ul>
      </nav>
    </MainHeader>
  </>
}

export default MainNavigation