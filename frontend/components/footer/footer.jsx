import { Link } from 'react-router';
import React from 'react';


const Footer = () => {

  return (
    <div>
      <div className="footer-main-container">
        <div className="footer-side-links">
          <h3>Github</h3>
          <h3>LinkedIn</h3>
          <h3>Portfolio</h3>
        </div>
        <div className="footer-about-text">
          <p>Boba buddies is all about making communities feel more like neighborhoods.
            Do you have a love for boba? Looking for a new boba place to try,
            but you don't know where to go?
            Why not do both by attending an event with Boba Buddies!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
