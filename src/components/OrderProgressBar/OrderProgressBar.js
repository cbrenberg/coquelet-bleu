import React, { Component } from 'react';
import {connect} from 'react-redux';
import './OrderProgressBar.css';

class HomePage extends Component {



  render() {
    return (
      //TODO: set value based on redux store 'progress'
        <progress value='50' max='100' />
    )
  }
}

const mapStateToProps = ({state}) => ({state})

export default connect(mapStateToProps)(HomePage);