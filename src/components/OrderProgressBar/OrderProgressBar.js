import React, { Component } from 'react';
import {connect} from 'react-redux';
import './OrderProgressBar.css';
import orderProgress from '../../redux/reducers/orderProgressReducer';

class HomePage extends Component {



  render() {
    return (
      <>
      {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      {/* //TODO: set value based on redux store 'progress' */}
        <progress value={this.props.value} max='100' />
        </>
    )
  }
}

const mapStateToProps = ({orderProgress}) => ({ value: orderProgress.value})

export default connect(mapStateToProps)(HomePage);