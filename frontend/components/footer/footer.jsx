import { Link } from 'react-router';
import React from 'react';


const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-main-container">
        <div className="footer-side-links">
          <li><a href="https://github.com/beebeean09">Github</a></li>
          <li><a href="https://www.linkedin.com/in/beebeean09/">LinkedIn</a></li>
          <li><a href="">Portfolio</a></li>
        </div>
        <div className="footer-about-text">
          <p>Boba Buddies is all about making our cities feel
            more like neighborhoods. We're more 'connected'
            than ever before, but we're also more alone. And all we want to do
              is enjoy our favorite boba drinks and bring boba buddies
              together because, well, the world is better that way.

              And you don't have to feel alone. Boba Buddies are here for you!
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


// <p>Boba buddies is all about making communities feel more like neighborhoods.
//   Are you constantly thinking about boba? Maybe you're just looking for a new boba place to try,
// `but you don't know where all the avid boba drinkers go.
// Well we're here to help you make that connection, so
//   why not do them all by attending an event with Boba Buddies!
// </p>
