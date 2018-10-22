import React from 'react';
import RoosterLogo from '../../images/rooster-logo-blue.png';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const OrderSummary = () => (
    <div className="container">
      <div className="imageDiv">
        <img id="logo" src={RoosterLogo} />
      </div>
      <div className="textDiv">
        <p>Description of the company, etc.</p>
      </div>
    </div>
);

export default OrderSummary;