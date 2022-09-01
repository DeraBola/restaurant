import React from "react";
import { SubHeading } from '../../components'
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The key to Fine dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0', text-transform:}} >  Lip smacking cuisine passed down by generations having pride in their authentic recipes that comes with natural ingredients prepared by hands to create memorable taste and satisfaction </p>
    <button type="button"  className="custom__button">Explore-Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header-img "/>
    </div>
  </div>
);

export default Header;
