import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();
  }


  render() {
    let navbarButton;
    // debugger;

    if (this.props.currentUser) {
      navbarButton =
      <div className="navbar-main-right">
        <Link className="log-button" to='/cities'>Cities</Link>
        <button className="log-button" onClick={() => this.props.logout()}>Log Out</button>
      </div>;
    } else {
      navbarButton =
      <div className="navbar-main-right">
        <Link className="log-button" to='/cities'>Cities</Link>
        <Link className="log-button" to="/sign-in">Sign In</Link>
        <Link className="log-button" to="/sign-up">Sign Up</Link>
        <form onSubmit={this.handleDemoLogin}>
          <input className="log-button" type="submit" value="Demo Login" />
        </form>
      </div>;
    }
    return(
      <div className="navbar-header">
        <div className="navbar-main-left">
          <a href="#/">
            <img className="navbar-logo" src="../../../assets/images/bobaIcon2.png" alt="Milk Tea Boba" />
          </a>
          <Link to="/" className="boba-buddies-text">Boba Buddies</Link>
        </div>
        {navbarButton}
      </div>
    );
  }
}

export default withRouter(Navbar);
