import React from 'react';
import preloaderGif from '../assets/axo.gif';
import "./Preloader.css";
const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={preloaderGif} alt="Loading..." className="preloader-image"/>
    </div>
  );
};

export default Preloader;
