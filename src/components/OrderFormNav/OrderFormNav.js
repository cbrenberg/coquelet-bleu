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
        <NavLink className={!this.props.newOrder.toSubmit.bean ? 'disabledLink' : null} to='/order/2'>Select Your Roast</NavLink>
        <NavLink className={!this.props.newOrder.toSubmit.roast ? 'disabledLink' : null} to='/order/3'>Choose Quantity</NavLink> 
        <NavLink className={!this.props.newOrder.toSubmit.quantity ? 'disabledLink' : null} to='/order/4'>Review Your Order</NavLink>
        <NavLink className={!this.props.newOrder.toSubmit.quantity ? 'disabledLink' : null} to='/order/5'>Submit and Pay</NavLink>
      </div>
    )
  }
}

const mapStateToProps = ({ newOrder }) => ({ newOrder })

export default connect(mapStateToProps)(OrderFormNav);