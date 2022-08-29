import React from 'react';
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding"id="contact" >
    <div className='app__wrapper_info' >
<SubHeading title="Contact" />
<h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>FindUs</h1>
<div className="app__wrapper-content">
  <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
  <p className="p__cormorant">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
  <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
  <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
</div>
    </div>
    <div className="app__wrapper_img">
    <img src={images.findus}  alt="findus" />
    </div>
  </div>
);

export default FindUs;
