import React from 'react';
import { Link } from 'react-router-dom';
import './FormNavButton.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const FormNavButton = (props) => {
  
    return (
        <Link 
          to={props.path === null ? '/order' : `/order/${props.path}`} 
          className={props.disabled ? 'disabled' : null}
        >
          {props.text}
          {JSON.stringify(props.location, null, 2)}
        </Link>
    )
};

export default FormNavButton;