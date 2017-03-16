import React from 'react';
import { Link, withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';

const Home = ({currentUser}) => {

  let mainButton;

  if (currentUser) {
    mainButton = <Link to="/cities"
      className="home-container-links">Let's get boba!</Link>;
    } else {
    mainButton = <Link to="/sign-up"
      className="home-container-links">Let's get boba!</Link>;
    }

  return(
    <div className="home-container">
      {mainButton}
    </div>
  );
};

export default Home;
