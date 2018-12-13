import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const BeanDetail = (props) => {
  return props.bean.id ? (
    <>
      <li><strong>Selected Bean: </strong>{props.bean.name}</li>
      <li><strong>Description: </strong>{props.bean.origin_description}</li>
      <li><strong>Flavor Notes: </strong>{props.bean.flavor_description}</li>
      <li><strong>Suggested Roasts: </strong>{props.bean.roasts.join(', ')}</li>
    </>
  ) : <h4>Please choose from the dropdown menu above for more information.</h4>
};

export default BeanDetail;