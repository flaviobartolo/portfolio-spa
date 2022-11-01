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
              text={'Mastering Django and Django Rest Framework'}
              tech={'python; django; django-rest-framework; javascript; html; css;'} />
            <TimelineBranch 
              date={'November 2017 to now'} 
              header={'Started working at Flintbee'} 
              text={'Full Stack developer. Creating and developing private software for our client projects management.'}
              tech={'python; webapp2; flask; javascript; jquery; html; css; google cloud platform; datastore; bigquery;'} />
            <TimelineBranch 
              date={'April 2016'} 
              header={'Microsoft Certified Professional'} 
              text={'Programming in HTML5 with JavaScript and CSS3.'}
              tech={'html; javascript; css;'} />
            <TimelineBranch 
              date={'January 2016'} 
              header={'Started working at MatchProfiler'} 
              text={'Full Stack developer. Creating web platforms for our clients.'}
              tech={'html; javascript; css; php; phalconphp; laravel; symfony; jquery; mysql; angularjs;'} />
            <TimelineBranch 
              date={'October 2015'} 
              header={'1 month internship at DotPro'} 
              text={'Creating platforms and incorporate them into our CMS.'}
              tech={'html; javascript; css; php;'} />
            <TimelineBranch 
              date={'June 2015'} 
              header={'Completed bachelor degree'} 
              text={'New Communication Technologies in Aveiro University'}
              tech={'html; javascript; css; php; mysql; phonegap; processing; arduino;'} />
          </ul>
          <p className='timeline__info'><i>*there are certifications not shown on this timeline for the sake of not making it cumbersome, for more details download my cv or send me an email.</i></p>
        </div>
      </div>

    </div>
  </div>
}

export default Timeline