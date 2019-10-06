import React from 'react';
import Header from './Header';

const WelcomePage = ({ logUserOut }) => (
  <div className="welcome-page">
    <Header />
    <h1>Hello and Welcome!</h1>
    <button onClick={logUserOut} type="button">
      Log Out
    </button>
  </div>
);

export default WelcomePage;
