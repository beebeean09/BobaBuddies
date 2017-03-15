import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
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

  reder() {
    return (
      <div>
        <h1>Hello this is the session form!</h1>        
      </div>
    );
  }

}
