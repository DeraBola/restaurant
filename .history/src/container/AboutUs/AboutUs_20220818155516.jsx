import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about' >
  <div className='app__aboutus-overlay flex__center'>
    <img src={images.G} alt="g-letter"/> 
    </div>   
    <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about' >
<h1 className='headtext__cormorant'>About Us</h1>
<img src={images.spoon} alt/> 
    </div>
    </div>
  </div>
);

export default AboutUs;
