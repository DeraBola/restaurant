import React from "react";
import { SubHeading } from '../../components'
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The key to Fine dining</h1>
      <p className="p__opensans" style={{marg}} ></p>
    </div>
    <div className="app__wrapper_img"></div>
  </div>
);

export default Header;
