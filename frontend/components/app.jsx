import React from 'react';
import {Link} from 'react-router';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <h1>Welcome to Boba Buddies!</h1>
    <NavbarContainer />
    { children }
  </div>
);

export default App;
