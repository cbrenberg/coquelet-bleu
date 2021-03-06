import React, { Component } from 'react';
import {connect} from 'react-redux';
import './OrderProgressBar.css';

class HomePage extends Component {

  render() {
    return (
      <>
      {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        <progress id="orderProgress" value={this.props.value} max='5' />
        </>
    )
  }
}

const mapStateToProps = ({orderProgress}) => ({ value: orderProgress.value})

export default connect(mapStateToProps)(HomePage);