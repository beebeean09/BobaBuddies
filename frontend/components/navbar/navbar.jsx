import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    // this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.
  // }

  // handleDemoLogin(e) {
  //   e.preventDefault();
  //   this.props.demoLogin();
  // }
  // <form onSubmit={this.handleDemoLogin}>
  //   <input className="log-button" type="submit" value="Demo Login" />
  // </form>

  render() {
    let navbarButton;

    // debugger;
    if (this.props.currentUser) {
      navbarButton = <button className="navbar-main-right" className="log-button" onClick={() => this.props.logout()}>Log Out</button>;
    } else {
      navbarButton =
      <div className="navbar-main-right">
        <Link className="log-button" to="/sign-in">Sign In</Link>
        <Link className="log-button" to="/sign-up">Sign Up</Link>
        <button className="log-button" onClick={() => this.props.demoLogin()}>Demo Login</button>
      </div>;
    }
    return(
      <div className="navbar-header">
        <Link to="/" className="navbar-main-left" className="boba-buddies-text">Boba Buddies</Link>
        {navbarButton}
      </div>
    );
  }
}

export default withRouter(Navbar);
