import React from 'react'

import Card from '../../Card/Card'
import {FaNodeJs, FaReact, FaPhp, FaSymfony, FaAws, FaSass} from 'react-icons/fa'
import {DiJqueryLogo, DiDjango, DiLaravel, DiMongodb, DiGoogleCloudPlatform, DiCss3} from 'react-icons/di'
import {SiJavascript, SiFlask, SiPytorchlightning, SiMysql, SiFirebase, SiHeroku, SiHtml5} from 'react-icons/si'
import {TbBrandPython} from 'react-icons/tb'
import {BsHexagonFill} from 'react-icons/bs'

import './Technologies.css'

const Technologies = () => {
  return <div class='technologies-wrapper row'>
    <h1 className='technologies-wrapper__title section-line col-md-12'>Technologies and skills</h1>
    
    <h5 className='technologies-wrapper__subtitle col-md-12'>Javascript</h5>
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

    <h5 className='technologies-wrapper__subtitle col-md-12'>Python</h5>
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

    <h5 className='technologies-wrapper__subtitle col-md-12'>Php</h5>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<DiLaravel />} title={'Laravel'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaSymfony />} title={'Symfony'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaPhp />} title={'Phalcon Php'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaPhp />} title={'Native Php'} text={'Something here'} />
      </div>
    </div>
    
    <h5 className='technologies-wrapper__subtitle col-md-12'>Databases</h5>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<SiMysql />} title={'MySql'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<DiMongodb />} title={'MongoDB'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<BsHexagonFill />} title={'Datastore'} text={'Something here'} />
      </div>
      <div className='col-md-3'></div>
    </div>

    <h5 className='technologies-wrapper__subtitle col-md-12'>Cloud</h5>
    <div className='row'>
      <div className='col-md-3'>
        <Card icon={<DiGoogleCloudPlatform />} title={'Google Cloud Platform'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaAws />} title={'Amazon Web Services'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiFirebase />} title={'Firebase'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<SiHeroku />} title={'Heroku'} text={'Something here'} />
      </div>
    </div>
    <h5 className='technologies-wrapper__subtitle col-md-12'>Styling</h5>
    <div className='row'>
    <div className='col-md-3'>
        <Card icon={<SiHtml5 />} title={'Html5'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<DiCss3 />} title={'Css'} text={'Something here'} />
      </div>
      <div className='col-md-3'>
        <Card icon={<FaSass />} title={'Sass'} text={'Something here'} />
      </div>
    </div>
  </div>
}

export default Technologies