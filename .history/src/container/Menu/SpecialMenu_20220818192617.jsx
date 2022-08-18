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
            <p>{wine.title}</p>
          ))}
        </div>
      </div>

<div className="app__specialMenu-Menu_img" >
<img src={images.menu} alt="menu-img" />
</div>

<div className="app__specialMenu-Menu_cocktaials flex__center">
        <p className="app__specialMenu-Menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-Menu_item">
          {data.cocktails.map((cocktaial, index) => (
            <p>{cocktail.title}</p>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default SpecialMenu;
