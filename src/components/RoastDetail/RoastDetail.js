import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const RoastDetail = (props) => {
  return props.roast.id ? (
    <>
      <li><strong>Selected Roast: </strong>{props.roast.roast}</li>
      <li><strong>Roast Description: </strong>{props.roast.description}</li>
    </>
  ) : null
};

export default RoastDetail;