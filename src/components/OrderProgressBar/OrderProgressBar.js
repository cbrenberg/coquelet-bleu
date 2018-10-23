import React, { Component } from 'react';
import {connect} from 'react-redux';
import './OrderProgressBar.css';

class HomePage extends Component {



  render() {
    return (
      <>
      {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      {/* //TODO: set value based on redux store 'progress' */}
        <progress value={this.props.inventory.orderProgress.progress} max='100' />
        </>
    )
  }
}

const mapStateToProps = ({inventory}) => ({inventory})

export default connect(mapStateToProps)(HomePage);