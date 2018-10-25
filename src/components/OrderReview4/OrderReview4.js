import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import OrderSummary from '../OrderSummary/OrderSummary';



class OrderReview extends Component {

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 4 });
  }

  render() {
    return (
      <div id="OrderReview">
        <h3>Order Form Page 4: Review Order</h3>
        <p>Take a moment to look over your order. When you're ready, proceed to checkout!</p>
        <OrderSummary />
      </div>
    )
  }
}

export default connect()(OrderReview);
