import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g-letter" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{textTransform:'lowercase'}}>
        Gericht is a German restaurant in the heart of Hessen that creates traditional and foreign meals with well selected ingredients  to serve to our customers who appreciates exotic meals and have palatable tastebuds. 
        </p>
        <button className="custom__button">Know More</button>
      </div>

      <div className=" app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="about_knife" className="knife__img" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"style={{textTransform:'lowercase'}} >
        Our restaurant then a little shop in Hessen was EST 1993, by grandma Egritcht. Who’s passion has created one of the most sort after restaurant in all of Europe. 29 years and we’re still dishing out mouth watering cuisine.
        </p>
        <button className="custom__button">Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;