import React from 'react';
import './HomePage.css';
import RoosterLogo from '../../images/rooster-logo-blue.png';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const HomePage = () => (
  <div id="homePage">
      <h1>Welcome</h1>
      <div className="container">
        <div className="imageDiv">
          <img id="logo" src={RoosterLogo} />
        </div>
        <div className="textDiv">
          <p>Description of the company, etc.</p>
        </div>
      </div>
  </div>
);

export default HomePage;
