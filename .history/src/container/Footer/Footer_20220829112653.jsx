import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links-contacts"></div>
      <div className="app__footer-links-logo"></div>
      <div className="app__footer-links_work"></div>
    </div>
    .fter__cpyrght
  </div>
);

export default Footer;
