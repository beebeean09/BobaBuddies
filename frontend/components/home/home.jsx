import React from 'react';
import { Link, withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';

const Home = ({currentUser}) => {

  let mainButton;

  if (currentUser) {
    mainButton = <Link className="floating-button" to="/cities">Let's Find Boba Buddies</Link>;
    } else {
    mainButton = <Link className="floating-button" to="/sign-up">Let's Find Boba Buddies</Link>;
    }

  return(
    <div className="home-container-links">
      <img src="http://res.cloudinary.com/beebeean09/image/upload/v1490075035/DDDC7877-C40D-48A6-8BAF-3A9B4ED17D50_artp2z.jpg"
        alt="boba-home-image-cover"/>
      <div className="floating-container">
        <div className="floating-header">
          <h1>Boba Connects Us All.</h1>
        </div>
        {mainButton}
      </div>

    </div>
  );
};

export default Home;


// <h2>Why can't we do the same with boba?</h2>
