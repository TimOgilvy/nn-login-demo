import React from 'react';
import Header from './Header';

const WelcomePage = ({ logUserOut, userName }) => (
  <div className="welcome-page">
    <Header />
    <h1>Hello and Welcome {userName}!</h1>
    <button onClick={logUserOut} type="button">
      Log Out
    </button>
  </div>
);

export default WelcomePage;
