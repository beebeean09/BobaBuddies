import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", first_name: "", host: false};
    this.handleSubmit = this.handleSubmit.bind(this);
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

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  navLink() {
    if (this.props.formType === "sign-in") {
      return <Link to="/sign-up">Sign Up</Link>;
    } else {
      return <Link to="/sign-in">Sign In</Link>;
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



  render() {
    const inputName = this.props.formType === 'sign-up' ?
      <div>
        <label> First Name:
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}/>
        </label><br /><br />
      </div>
       : <div></div>;


    return (
      <div>
        <h1>Hello this is the session form!</h1>

        Please {this.props.formType} or {this.navLink()}
        {this.renderErrors()}
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
