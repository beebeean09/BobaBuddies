import React from 'react';
import { Link, withRouter } from 'react-router';

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
      return <Link to="/sign-up">sign up</Link>;
    } else {
      return <Link to="/sign-in">sign in</Link>;
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

    const linkMessage = this.props.formType === 'sign-up' ?
    "If you've already done this before, click the link here to" :
    "If you've never signed up before, click the link here to";

    const inputName = this.props.formType === 'sign-up' ?
      <div>
        {linkMessage} {this.navLink()}.
        <br /><br />
        <label> First Name:
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}/>
        </label><br /><br />
      </div>
       :
       <div>
         {linkMessage} {this.navLink()}.
         <br /><br />
       </div>;

    return (
      <div className="session-form-container">
        <h1 className="session-form-container">Hello this is the session form!</h1>
        {this.renderErrors()}

        <form onSubmit={this.handleDemoLogin}>
          <input type="submit" value="Click here for demo" />
        </form>

        <form onSubmit={this.handleSubmit}>
          {inputName}
          <label>Email Address:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>
          <br />
          <br />
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>
          <br /><br />
          <input type="submit" value="Submit"/>
        </form>

        <Link to="/">Back to Home</Link>
      </div>
    );
  }

}

export default withRouter(SessionForm);
