import React, { useState, useEffect, useRef }  from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

 
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
