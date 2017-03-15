import React from 'react';
import { Link } from 'react-router';

const Home = ({currentUser}) => {
  let button;
  if (currentUser) {
    button = <Link to="/cities">Let's get boba!</Link>;
  } else {
    button = <Link to="/sign-up">Let's get boba!</Link>;
  }

  return(
    <div>
      {button}
    </div>
  );
};

export default Home;
