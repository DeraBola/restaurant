import React from 'react';
import { images } from "../../constants";
const SubHeading = () => (
  <div style={ {marginBottom: '1rem'} }>
     <P className="p__cormorant">TITLE</P>
     <img src={images.spoon} alt="" />
  </div>
);

export default SubHeading;
