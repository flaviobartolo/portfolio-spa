import React from 'react'

import Card from '../Card/Card'
import {FaNodeJs, FaReact} from 'react-icons/fa'
import {DiJqueryLogo, DiDjango} from 'react-icons/di'
import {SiJavascript, SiFlask, SiPytorchlightning} from 'react-icons/si'
import {TbBrandPython} from 'react-icons/tb'

import './Technologies.css'

const Technologies = () => {
  return <div class='technologies-wrapper row'>
    <h1 className='technologies-wrapper__title section-line col-md-12'>Technologies and skills</h1>
    
    <h3 className='technologies-wrapper__subtitle col-md-12'>Javascript</h3>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<FaReact />} title={'ReactJs'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaNodeJs />} title={'NodeJs'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<DiJqueryLogo />} title={'JQuery'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiJavascript />} title={'Javascript'} text={'native javascript'} />
      </div>
    </div>

    <h3 className='technologies-wrapper__subtitle col-md-12'>Python</h3>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<DiDjango />} title={'Django'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiFlask />} title={'Flask'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiPytorchlightning />} title={'Web2app'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<TbBrandPython />} title={'Native Python'} text={'Something here'} />
      </div>
    </div>

    <h3 className='technologies-wrapper__subtitle col-md-12'>Php</h3>
    <div className='row'>
      <div className='col-md-4'>Laravel</div>
      <div className='col-md-4'>Phalcon</div>
      <div className='col-md-4'>Symphony</div>
    </div>
    
    <h3 className='technologies-wrapper__subtitle col-md-12'>Databases</h3>
    <div className='row'>
      <div className='col-md-4'>MySql</div>
      <div className='col-md-4'>MongoDB</div>
      <div className='col-md-4'>Datastore</div>
    </div>

    <h3 className='technologies-wrapper__subtitle col-md-12'>Cloud</h3>
    <div className='row'>
      <div className='col-md-4'>Google Cloud Platform</div>
      <div className='col-md-4'>Amazon Web Services</div>
      <div className='col-md-4'>FireBase</div>
    </div>
    <h3 className='technologies-wrapper__subtitle col-md-12'>Styling</h3>
    <div className='row'>
      <div className='col-md-4'>HTML5</div>
      <div className='col-md-4'>CSS</div>
      <div className='col-md-4'>SCSS</div>
    </div>
  </div>
}

export default Technologies