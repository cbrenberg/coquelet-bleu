import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import { connect } from 'react-redux';

import './OrderFormNav.css'


class OrderFormNav extends Component {

  render() {
    return (
      <div className="verticalNav">
        <NavLink to='/order'>Select An Origin</NavLink>
        <NavLink to='/order/2'>Select Your Roast</NavLink>
        <NavLink to='/order/3'>Choose Quantity</NavLink>
        <NavLink to='/order/4'>Review Your Order</NavLink>
        <NavLink to='/order/5'>Submit and Pay</NavLink>
      </div>
    )
  }
}

export default connect()(OrderFormNav);