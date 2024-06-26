import React from 'react';

import { images } from "../../constants";
import { SubHeading } from "../../components";
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact'></SubHeading>
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Hill Street, NYC, United States</p>
        <p className="p__cormorant" style={{color:'#DCCA87',margin:'2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri : 10:00 am - 10:00 pm</p>
        <p className="p__opensans">Sat - Sun : 10:00 am - 12:00 pm</p>
      </div>
      <button className='custom__button' type='button' style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="Find us" />
    </div>
  </div>
);

export default FindUs;
