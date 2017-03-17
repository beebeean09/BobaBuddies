import React from 'react';
import { Link, withRouter } from 'react-router';
import NavbarContainer from '../navbar/navbar';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", first_name: "", host: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillMount() {
    this.props.clearErrors;
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  navLink() {
    if (this.props.formType === "sign-in") {
      return (
      <div className="session-form-navlink">
        <Link to="/sign-up">If you've never signed up before, click the link here to sign up.</Link>
      </div>
      );
    } else {
      return (
      <div className="session-form-navlink">
        <Link to="/sign-in">If you've already done this before, click the link here to sign-in.</Link>
      </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li
            key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();
  }

  render() {

    const inputName = this.props.formType === 'sign-up' ?
      <div className="session-form-navlink-main">
        {this.navLink()}
        <label>
          <input
            className="session-form-input"
            type="text"
            value={this.state.first_name}
            placeholder="First Name"
            onChange={this.update('first_name')}/>
        </label><br /><br />
      </div>
       :
       <div className="session-form-navlink-main">
         {this.navLink()}
       </div>;

    const greeting = this.props.formType === 'sign-up' ?
      <div className="greeting-container">
        <h1>Join us for boba!</h1>
        <h2>We will find you a boba buddy in no time!</h2>
      </div> :
      <div className="greeting-container">
        <h1>Hi there, welcome back!</h1>
        <h2>Your boba buddies are waiting for you!</h2>
      </div>;

    return (
      <div >
        <div>
          <NavbarContainer />
        </div>
        <div className="session-form-main-container" >

          {greeting}
          {this.renderErrors()}


          <div className="session-form-navlink-main">
            {this.navLink()}
          </div>

          <form onSubmit={this.handleSubmit}>
              {this.props.formType === 'sign-up' ?
              <div>
                <label>
                  <input
                    className="session-form-input"
                    type="text"
                    value={this.state.first_name}
                    placeholder="First Name"
                    onChange={this.update('first_name')}/>
                </label>
                <br /><br />
            </div>
            :
          <div></div>}
            <label>
              <input
                className="session-form-input"
                type="text"
                value={this.state.email}
                placeholder="Email Address"
                onChange={this.update('email')}/>
            </label>
            <br />
            <br />
            <label>
              <input
                className="session-form-input"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}/>
            </label>
            <br /><br />
            <input className="session-form-submit-button" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(SessionForm);
