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
    if (this.props.currentUser) {
      navbarButton =
      <div className="navbar-main-right">
        <ul className="nav">
          <li><Link className="log-button" to='/dashboard/events'>Dashboard</Link></li>
          <li><Link className="log-button" to='/cities'>Cities</Link></li>
          <li><button className="log-button" onClick={() => this.props.logout()}>Log Out</button></li>
        </ul>
        <ul className="hamburger-dropdown">
          <li className="ham-link">
            <ul className="ham-link-content">
              <li className="log-button-drop"><Link to='/dashboard/events'>Dashboard</Link></li>
              <li className="log-button-drop"><Link to='/cities'>Cities</Link></li>
              <li className="log-button-drop"><button onClick={() => this.props.logout()}>Log Out</button></li>
            </ul>
          </li>
        </ul>
      </div>;
    } else {
      navbarButton =
      <div className="navbar-main-right">
        <ul className="nav">
          <li><Link className="log-button" to='/cities'>Cities</Link></li>
          <li><Link className="log-button" to="/sign-in">Sign In</Link></li>
          <li><Link className="log-button" to="/sign-up">Sign Up</Link></li>
          <form onSubmit={this.handleDemoLogin}>
            <li><input className="log-button" type="submit" value="Demo Login" /></li>
          </form>
        </ul>
        <ul className="hamburger-dropdown">
          <li className="ham-link">
            <ul className="ham-link-content">
              <li className="log-button-drop"><Link to='/cities'>Cities</Link></li>
              <li className="log-button-drop"><Link to="/sign-in">Sign In</Link></li>
              <li className="log-button-drop"><Link to="/sign-up">Sign Up</Link></li>
              <form onSubmit={this.handleDemoLogin}>
                <li className="log-button-drop"><input type="submit" value="Demo Login" /></li>
              </form>
            </ul>
          </li>
        </ul>
      </div>;
    }
    return(
      <div className="navbar-header">
        <div className="navbar-main-left">
          <a href="#/">
            <img className="navbar-logo" src="http://res.cloudinary.com/beebeean09/image/upload/v1490057533/bobaIcon2_lvst90.png"
              alt="Milk Tea Boba" />
          </a>
          <Link to="/" className="boba-buddies-text">Boba Buddies</Link>
        </div>
        {navbarButton}
      </div>
    );
  }
}

export default withRouter(Navbar);
