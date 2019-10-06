import React, { Component } from 'react';
import LoginForm from './LoginForm';
import WelcomePage from './WelcomePage';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAuthenticated: false,
      userName: ''
    };
  }

  setAuthState = (newState, userName) =>
    this.setState({
      userAuthenticated: newState,
      userName
    });

  logUserOut = () => this.setAuthState(false, '');

  render = () => {
    const { userAuthenticated, userName } = this.state;
    return (
      <>
        {' '}
        {/* fragment shorthand */}
        {!userAuthenticated && <LoginForm setAuthState={this.setAuthState} />}
        {userAuthenticated && (
          <WelcomePage logUserOut={this.logUserOut} userName={userName} />
        )}
      </>
    );
  };
}

export default AuthContainer;
