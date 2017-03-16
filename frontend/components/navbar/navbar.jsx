import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navbarButton;

    if (this.props.currentUser) {
      navbarButton = <button className="navbar-main-right" onClick={() => this.props.logout()}>Log Out</button>;
    } else {
      navbarButton =
      <div className="navbar-main-right">
        <Link className="login-button" to="/sign-in">Sign In</Link>
        <Link className="login-button" to="/sign-up">Sign Up</Link>
      </div>;
    }

    return(
      <div className="navbar-header">
        <p className="navbar-main-left">Boba Buddies</p>
        {navbarButton}
      </div>
    );
  }
}

export default withRouter(Navbar);
