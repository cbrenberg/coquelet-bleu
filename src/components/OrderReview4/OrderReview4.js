import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import OrderSummary from '../OrderSummary/OrderSummary';

class OrderReview extends Component {

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 4 });
  }

  render() {
    return (this.props.quantitySelected ? (
      <div id="OrderReview">
        <h3>Order Form Page 4: Review Order</h3>
        <p>Take a moment to look over your order. When you're ready, proceed to checkout!</p>
        <OrderSummary />
      </div>
    ) : <Redirect to="/order/3" /> )
  }
}

  const mapStateToProps = ({ newOrder }) => ({ quantitySelected: newOrder.toDisplay.quantity })

export default connect(mapStateToProps)(OrderReview);
