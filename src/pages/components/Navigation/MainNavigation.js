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
      <h4 className='main-navigation__title'>
        <Link to='/' onClick={goTop}>FBartolo.dev</Link>
      </h4>
      <nav className='main-navigation__header-nav'>
        <ul className='main-navigation__header-nav--links'>
          <li className='main-navigation__header-nav--links-link'>
            A
          </li>
          <li className='main-navigation__header-nav--links-link'>
            B
          </li>
        </ul>
      </nav>
    </MainHeader>
  </>
}

export default MainNavigation