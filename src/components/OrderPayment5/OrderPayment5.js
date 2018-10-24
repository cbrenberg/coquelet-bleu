import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';


class OrderPayment extends Component {

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 5 });
  }

  render() {
    return (
      <div id="orderRoast">
        <h3>Order Form Page 5: Submit and Pay</h3>
      </div>
    )
  }
}

export default connect()(OrderPayment);