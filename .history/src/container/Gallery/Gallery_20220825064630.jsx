import React from 'react';
import { SubHeading } from "../../components";
import { images} from "../../constants";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  return(
  <div  className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans"  style={{ color: "#AAA", marginTop: "2rem" }}>lorem patttt ehyyyyyyyy wjhsuywvbvfemjkklkef kkgdywefeyfgerkfjerlgj</p>
    <button type='button' className='custom__button'>Vwe M</button>
    </div>
     
  </div>
  );
}

export default Gallery;
