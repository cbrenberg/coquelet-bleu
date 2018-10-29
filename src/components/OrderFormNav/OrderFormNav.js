import React, { Component } from 'react';
import {
  NavLink,
  withRouter
} from 'react-router-dom';

import { connect } from 'react-redux';

import './OrderFormNav.css'


class OrderFormNav extends Component {

  render() {
    return (
      <div className="verticalNav">
        <NavLink exact={true} className='viewNav' to='/order'>Select An Origin</NavLink>
        <NavLink exact={true} className={"viewNav " + (!this.props.newOrder.toSubmit.bean ? 'disabledLink' : '')} to='/order/2'>Select Your Roast</NavLink>
        <NavLink exact={true} className={"viewNav " + (!this.props.newOrder.toSubmit.roast ? 'disabledLink' : null)} to='/order/3'>Choose Quantity</NavLink> 
        <NavLink exact={true} className={"viewNav " + (!this.props.newOrder.toSubmit.quantity ? 'disabledLink' : null)} to='/order/4'>Review Your Order</NavLink>
        <NavLink exact={true} className={"viewNav " + (!this.props.newOrder.toSubmit.quantity ? 'disabledLink' : null)} to='/order/5'>Submit and Pay</NavLink>
      </div>
    )
  }
}

const mapStateToProps = ({ newOrder }) => ({ newOrder })

export default withRouter(connect(mapStateToProps)(OrderFormNav));