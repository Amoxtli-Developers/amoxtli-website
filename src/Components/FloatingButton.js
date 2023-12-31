import React from 'react';
import './FloatingButton.css'; // Importing the CSS for styling
import backgroundGif from '../assets/button.gif'; // Path to your GIF file

const FloatingButton = () => {
  return (
    <button className="floating-button">
      <img src={backgroundGif} alt="Background" className="button-gif" />
      <span className="notification-badge">3</span>
    </button>
  );
};

export default FloatingButton;