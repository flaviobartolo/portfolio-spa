import React from 'react'

import './Timeline.css'

const TimelineBranch = (props) => {
  return  <li>
    <span>{props.date}</span>
    <div className="content">
      <h5>{props.header}</h5>
      <p>{props.text}</p>
      <p>{props.tech}</p>
    </div>
  </li>
}

export default TimelineBranch