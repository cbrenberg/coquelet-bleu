import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const QuantityDetail = (props) => {
  return props.quantity ? (
    <>
      <li><strong>Quantity: </strong>{props.quantity} oz.</li>
      <li><strong>Total Cost: </strong>${props.quantity * 1.25}.00</li>
    </>
  ) : null
};

export default QuantityDetail;