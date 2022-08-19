import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">

    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    <div className="app__specialMenu-Menu">

      <div className="app__specialMenu-Menu_wine flex__center">
        <p className="app__specialMenu-Menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-Menu_item">
          {data.wines.map((wine, index) => (
         <MenuItem key={wine.title + index} title=/>
          ))}
        </div>
      </div>

<div className="app__specialMenu-Menu_img" >
<img src={images.menu} alt="menu-img" />
</div>

<div className="app__specialMenu-Menu_cocktails flex__center">
        <p className="app__specialMenu-Menu_heading">Cocktails</p>
        <div className="app__specialMenu-Menu_item">
          {data.cocktails.map((cocktail, index) => (
            <p>{cocktail.title}</p>
          ))}
        </div>
      </div>
    </div>

    <div style={{marginTop:'15px'}}>
<button type="button" className="custom__button">View More</button>
</div>    
  </div>
);

export default SpecialMenu;
