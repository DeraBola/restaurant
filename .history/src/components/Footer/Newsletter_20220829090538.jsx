import React from 'react';
import { SubHeading } from "../../components";
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />   
      <h1 className="headtext__cormorant">About Us</h1>   
    </div>
  </div>
);

export default Newsletter;
