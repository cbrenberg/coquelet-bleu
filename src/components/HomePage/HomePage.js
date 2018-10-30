import React from 'react';
import './HomePage.css';
import RoosterLogoSansBG from '../../images/rooster-logo-transparent.png';
import { withRouter } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const HomePage = withRouter((props) => (
  <div id="homePage">
    <div className="container">
      <div className="imageDiv">
        <h1>Welcome</h1>
        <img id="logo" src={RoosterLogoSansBG} alt="Coquelet Bleu logo" />
      </div>
      <div className="textDiv">
        <p>Coquelet Bleu Coffee roasts coffee beans to your exact specifications, one tiny batch at a time.</p>
        <h3>Here's how it works:</h3>
        <ol>
          <li>Select your beans: Choose from any of the beans currently in stock.</li>
          <li>Select your roast: From light to dark, we've got you covered.</li>
          <li>Select your quantity: Up to one pound at a time.</li>
          <li>Pay securely with Stripe</li>
          <li>Await delivery: Your order will arrive when your beans are at their peak of flavor</li>
          <li>Enjoy!</li>
        </ol>
        <button
          onClick={(event) => {
            event.preventDefault();
            props.history.push('/order');
          }}>Click Here To Get Started</button>
      </div>
    </div>
  </div>
));

export default HomePage;
