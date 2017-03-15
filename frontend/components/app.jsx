import React from 'react';
import {Link} from 'react-router';

const App = ({ children }) => (
  <div>
    <h1>Welcome to Boba Buddies!</h1>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    { children }
  </div>
);

export default App;
