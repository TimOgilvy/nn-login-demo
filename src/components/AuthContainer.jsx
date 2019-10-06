import React, { Component } from 'react';
import LoginForm from './LoginForm';
import WelcomePage from './WelcomePage';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAuthenticated: false
    };
  }

  setAuthState = newState =>
    this.setState({
      userAuthenticated: newState
    });

  logUserOut = () => this.setAuthState(false);

  render = () => {
    const { userAuthenticated } = this.state;
    return (
      <>
        {' '}
        {/* fragment shorthand */}
        {!userAuthenticated && <LoginForm setAuthState={this.setAuthState} />}
        {userAuthenticated && <WelcomePage logUserOut={this.logUserOut} />}
      </>
    );
  };
}

export default AuthContainer;
