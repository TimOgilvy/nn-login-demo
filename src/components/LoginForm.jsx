import React from 'react';
import LoginMockery from '../helpers/LoginMockery';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.loginMockery = new LoginMockery();
    this.state = {
      formData: {
        username: '',
        password: ''
      },
      working: false,
      errorResponse: null
    };
  }

  formFieldChange = event => {
    const { formData } = this.state;
    this.setState({
      formData: {
        ...formData,
        [event.target.name]: event.target.value
      }
    });
  };

  formSubmit = event => {
    const { formData } = this.state;
    const { setAuthState } = this.props;
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      working: true
    });
    console.log(this.state.formData);
    this.loginMockery
      .mockLogin(formData)
      .then(response => {
        console.log(response);
        setAuthState(true, response.username);
        this.setState({
          working: false
        });
      })
      .catch(response => {
        console.log(response);
        this.setState({
          working: false,
          errorResponse: response
        });
      });
  };

  render = () => {
    const { formData, working, errorResponse } = this.state;
    return (
      <div className="login-form">
        <h1>Welcome to Naemi National, Please Log In</h1>
        {working && <h2>Attempting to log you in, please wait...</h2>}
        {errorResponse && errorResponse.message && (
          <h2 className="error-text">{errorResponse.message}</h2>
        )}
        <form onSubmit={this.formSubmit}>
          <label htmlFor="usernameInput">
            User Name:
            <input
              type="text"
              id="usernameInput"
              name="username"
              required
              placeholder=""
              autoComplete="off"
              readOnly={working}
              value={formData.username}
              onChange={this.formFieldChange}
            />
            {errorResponse &&
              errorResponse.input &&
              errorResponse.input.username && (
                <span className="error-text">
                  {' '}
                  {errorResponse.input.username}
                </span>
              )}
          </label>
          <br />
          <label htmlFor="passwordField">
            Password:
            <input
              type="password"
              id="passwordField"
              name="password"
              required
              autoComplete="off"
              readOnly={working}
              value={formData.password}
              onChange={this.formFieldChange}
            />
            {errorResponse &&
              errorResponse.input &&
              errorResponse.input.password && (
                <span className="error-text">
                  {' '}
                  {errorResponse.input.password}
                </span>
              )}
          </label>
          <br />
          <button type="button">I've forgotten my password...</button>
          <button type="submit" onClick={this.formSubmit}>
            Log In
          </button>
        </form>
      </div>
    );
  };
}

export default LoginForm;
