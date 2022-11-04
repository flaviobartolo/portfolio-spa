import React from 'react'

import './Cards.css'

const Card = (props) => {

  return <div className='card'>
    <div className='card__icon--container'>{props.icon}</div>
    <div className='card__title'>
      <h4>{props.title}</h4>
    </div>
    <div className='card__text'>
      <span>{props.text}</span>
    </div>
  </div>
}

export default Card