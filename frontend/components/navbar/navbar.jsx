import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navbarButton;

    if (this.props.currentUser) {
      navbarButton = <button onClick={() => this.props.logout()}>Log Out</button>;
    } else {
      navbarButton =
      <div>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>;
    }

    return(
      <div>
        {navbarButton}
      </div>
    );
  }
}

export default withRouter(Navbar);
