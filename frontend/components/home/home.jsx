import React from 'react';
import { Link, withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';

const Home = ({currentUser}) => {

  let mainButton;

  if (currentUser) {
    mainButton = <Link to="/cities">Let's get boba!</Link>;
    } else {
    mainButton = <Link to="/sign-up">Let's get boba!</Link>;
    }
    // <img className="boba-pic" src="/assets/boba1.jpg" alt="milk tea boba"/>

  return(
    <div className="home-main-container">
      <div className="home-container-links">
        {mainButton}
      </div>
    </div>
  );
};

export default Home;
