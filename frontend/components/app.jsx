import React from 'react';
import {Link} from 'react-router';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <NavbarContainer />
    { children }
  </div>
);

export default App;
