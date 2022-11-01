import React from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import './MainNavigation.css'


const MainNavigation = () => {
  return <>
    <MainHeader>
      <button className='main-navigation__menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <h4 className="main-navigation__title">
        <Link to='/'>FBartolo.dev</Link>
      </h4>
      <nav className='main-navigation__header-nav'>
        <ul className="nav-links">
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