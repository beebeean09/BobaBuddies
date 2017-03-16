import { Link, withRouter, hashHistory } from 'react-router';
import React from 'react';


class DemoLogin extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {email: "", password: "", first_name: "", host: false};
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();
  }

  componentWillReceiveProps(nextProps) {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    // debugger;
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }


  render() {
    return (
      <div>
        <button onClick={this.handleDemoLogin}>Click here to login as a guest.</button>
      </div>
    );
  }
}

export default withRouter(DemoLogin);
