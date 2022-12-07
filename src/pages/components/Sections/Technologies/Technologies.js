import React from 'react'

import Card from '../../Card/Card'
import {FaNodeJs, FaReact, FaPhp, FaSymfony, FaAws, FaSass} from 'react-icons/fa'
import {DiJqueryLogo, DiDjango, DiLaravel, DiMongodb, DiGoogleCloudPlatform, DiCss3} from 'react-icons/di'
import {SiJavascript, SiFlask, SiPytorchlightning, SiMysql, SiFirebase, SiHeroku, SiHtml5, SiFalcon} from 'react-icons/si'
import {TbBrandPython} from 'react-icons/tb'
import {BsHexagonFill} from 'react-icons/bs'

import './Technologies.css'

const Technologies = () => {
  return <div className='technologies-wrapper' id='skills'>
    <h1 className='technologies-wrapper__title section-line col-md-12'>Technologies and skills</h1>
    
    <h5 className='technologies-wrapper__subtitle col-md-12'>Javascript</h5>
    <div className='row'>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<FaReact />} title={'ReactJs'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<FaNodeJs />} title={'NodeJs'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<DiJqueryLogo />} title={'JQuery'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<SiJavascript />} title={'Javascript'} text={''} />
      </div>
    </div>

    <h5 className='technologies-wrapper__subtitle col-md-12'>Python</h5>
    <div className='row'>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<DiDjango />} title={'Django'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<SiFlask />} title={'Flask'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<SiPytorchlightning />} title={'Web2app'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<TbBrandPython />} title={'Python'} text={''} />
      </div>
    </div>

    <h5 className='technologies-wrapper__subtitle col-md-12'>Php</h5>
    <div className='row'>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<DiLaravel />} title={'Laravel'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<FaSymfony />} title={'Symfony'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<SiFalcon />} title={'Phalcon'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<FaPhp />} title={'Native Php'} text={''} />
      </div>
    </div>
    
    <h5 className='technologies-wrapper__subtitle col-md-12'>Databases</h5>
    <div className='row'>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<SiMysql />} title={'MySql'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<DiMongodb />} title={'MongoDB'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<BsHexagonFill />} title={'Datastore'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'></div>
    </div>

    <h5 className='technologies-wrapper__subtitle col-md-12'>Cloud</h5>
    <div className='row'>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<DiGoogleCloudPlatform />} title={'GAE'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<FaAws />} title={'AWS'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<SiFirebase />} title={'Firebase'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<SiHeroku />} title={'Heroku'} text={''} />
      </div>
    </div>
    <h5 className='technologies-wrapper__subtitle col-md-12'>Styling</h5>
    <div className='row'>
    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<SiHtml5 />} title={'Html5'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<DiCss3 />} title={'Css'} text={''} />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
        <Card icon={<FaSass />} title={'Sass'} text={''} />
      </div>
    </div>
  </div>
}

export default Technologies