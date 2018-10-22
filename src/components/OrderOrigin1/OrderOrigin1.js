import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const OrderOrigin = () => (
  <div id="orderOrigin">
    <h3>Order Form Page 1: Select bean origin</h3>
  </div>
);

export default OrderOrigin;