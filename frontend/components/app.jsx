import React from 'react';
import {Link} from 'react-router';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <NavbarContainer />
    { children }
    <Footer />
  </div>
);

export default App;
