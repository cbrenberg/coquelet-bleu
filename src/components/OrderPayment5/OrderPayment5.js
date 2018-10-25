import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import {StripeProvider, Elements} from 'react-stripe-elements';

import CheckoutForm from '../CheckoutForm/CheckoutForm'


class OrderPayment extends Component {

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 5 });
  }

  render() {
    return (
      <div id="orderRoast">
        <h3>Order Form Page 5: Submit and Pay</h3>
        <StripeProvider apiKey="pk_test_YOOTh9CE0vOGJLNC9WBPpXmr">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    )
  }
}

export default connect()(OrderPayment);