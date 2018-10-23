import React, { Component } from 'react';
import {connect} from 'react-redux';
import './OrderProgressBar.css';

class HomePage extends Component {



  render() {
    return (
      //TODO: set value based on redux store 'progress'
        <progress value={this.props.userOrder.orderProgress.progress} max='100' />
    )
  }
}

const mapStateToProps = ({userOrder}) => ({userOrder})

export default connect(mapStateToProps)(HomePage);