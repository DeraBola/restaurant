import React, { useState, useEffect, useRef }  from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (

  const App = () => {
    const prevScrollY = useRef(0);
  
    const [goingUp, setGoingUp] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (prevScrollY.current < currentScrollY && goingUp) {
          setGoingUp(false);
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
          setGoingUp(true);
        }
  
        prevScrollY.current = currentScrollY;
        console.log(goingUp, currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);


  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
