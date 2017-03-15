import React from 'react';

const Home = ({currentUser}) => {
  let button;
  if (currentUser) {
    button = <Link to="/sign-up">Let's get boba!</Link>;
  }

  return(
    <div>
      {button}
    </div>
  );
};

export default Home;
