import React from 'react'

import TimelineBranch from './TimelineBranch'

import './Timeline.css'


const Timeline = () => {
  return <div class='timeline-wrapper row'>
    <h1 className='timeline-wrapper__title section-line col-md-12'>Timeline</h1>
    <div class='row'>
      <div className='col-md-12'>
        <div className="timeline">
          <ul>
            <TimelineBranch 
              date={'May 2022'} 
              header={'Coursera Certification - Advanced Django'} 
              text={'Mastering Django and Django Rest Framework'} />
            <TimelineBranch 
              date={'November 2017 to now'} 
              header={'Started working at Flintbee'} 
              text={'Full Stack developer. Creating and developing private software for our client projects management.'} />
            <TimelineBranch 
              date={'April 2016'} 
              header={'Microsoft Certified Professional'} 
              text={'Programming in HTML5 with JavaScript and CSS3.'} />
            <TimelineBranch 
              date={'January 2016'} 
              header={'Started working at MatchProfiler'} 
              text={'Full Stack developer. Creating web platforms for our clients.'} />
            <TimelineBranch 
              date={'October 2015'} 
              header={'1 month internship at DotPro'} 
              text={'Creating platforms and incorporate them into our CMS.'} />
            <TimelineBranch 
              date={'June 2015'} 
              header={'Completed bachelor degree'} 
              text={'New Communication Technologies in Aveiro University'} />
          </ul>
          <p className='timeline__info'><i>*there are certifications not shown on this timeline for the sake of not making it cumbersome, for more details download my cv or send me an email.</i></p>
        </div>
      </div>

    </div>
  </div>
}

export default Timeline