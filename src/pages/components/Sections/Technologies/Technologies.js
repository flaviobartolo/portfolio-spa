import React from 'react'

import Card from '../../Card/Card'
import {FaNodeJs, FaReact, FaPhp, FaSymfony, FaAws, FaSass} from 'react-icons/fa'
import {DiJqueryLogo, DiDjango, DiLaravel, DiMongodb, DiGoogleCloudPlatform, DiCss3} from 'react-icons/di'
import {SiJavascript, SiFlask, SiPytorchlightning, SiMysql, SiFirebase, SiHeroku, SiHtml5, SiFalcon} from 'react-icons/si'
import {TbBrandPython} from 'react-icons/tb'
import {BsHexagonFill} from 'react-icons/bs'

import './Technologies.css'

const Technologies = () => {
  return <div className='technologies-wrapper row'>
    <h1 className='technologies-wrapper__title section-line col-md-12'>Technologies and skills</h1>
    
    <h5 className='technologies-wrapper__subtitle col-md-12'>Javascript</h5>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<FaReact />} title={'ReactJs'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaNodeJs />} title={'NodeJs'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<DiJqueryLogo />} title={'JQuery'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiJavascript />} title={'Javascript'} text={''} />
      </div>
    </div>

    <h5 className='technologies-wrapper__subtitle col-md-12'>Python</h5>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<DiDjango />} title={'Django'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiFlask />} title={'Flask'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiPytorchlightning />} title={'Web2app'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<TbBrandPython />} title={'Native Python'} text={''} />
      </div>
    </div>

    <h5 className='technologies-wrapper__subtitle col-md-12'>Php</h5>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<DiLaravel />} title={'Laravel'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaSymfony />} title={'Symfony'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiFalcon />} title={'Phalcon Php'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaPhp />} title={'Native Php'} text={''} />
      </div>
    </div>
    
    <h5 className='technologies-wrapper__subtitle col-md-12'>Databases</h5>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<SiMysql />} title={'MySql'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<DiMongodb />} title={'MongoDB'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<BsHexagonFill />} title={'Datastore'} text={''} />
      </div>
      <div className='col-md-3'></div>
    </div>

    <h5 className='technologies-wrapper__subtitle col-md-12'>Cloud</h5>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<DiGoogleCloudPlatform />} title={'Google Cloud Platform'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaAws />} title={'Amazon Web Services'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiFirebase />} title={'Firebase'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiHeroku />} title={'Heroku'} text={''} />
      </div>
    </div>
    <h5 className='technologies-wrapper__subtitle col-md-12'>Styling</h5>
    <div className='row'>
    <div className='col-md-3'>
        <Card icon={<SiHtml5 />} title={'Html5'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<DiCss3 />} title={'Css'} text={''} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaSass />} title={'Sass'} text={''} />
      </div>
    </div>
  </div>
}

export default Technologies