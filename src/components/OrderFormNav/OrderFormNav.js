import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import { connect } from 'react-redux';



class OrderFormNav extends Component {

  render() {
    return (
      <div>
        <Link to='/order'>Select An Origin</Link>
        <Link to='/order/2'>Select Your Roast</Link>
        <Link to='/order/3'>Choose Quantity</Link>
        <Link to='/order/4'>Review Your Order</Link>
        <Link to='/order/5'>Submit and Pay</Link>
      </div>
    )
  }
}

export default connect()(OrderFormNav);