import React from 'react';
import { SubHeading, MenuItem } from "../../components";
import { images } from "../../constants";
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
<img  src={images.chef}  alt="chef" />
    </div>
<div className="app__wrapper_inff">

</div>
  </div>
);

export default Chef;
