import React, { useRef } from 'react';
import { SubHeading } from "../../components";
import { images} from "../../constants";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);
  const scr

  return(
  <div  className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans"  style={{ color: "#AAA", marginTop: "2rem" }}>lorem patttt ehyyyyyyyy wjhsuywvbvfemjkklkef kkgdywefeyfgerkfjerlgj</p>
    <button type='button' className='custom__button'>Viwe More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_contianer" ref={scrollRef}>

      </div>
      <div className="app__gallery-images_arrow">
        <BsArrowLeftShort className='gallery__arrow-icon'onClick={() => scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon'onClick={() => scroll('right')} />
      </div>
      </div>   
  </div>
  );
}

export default Gallery;
