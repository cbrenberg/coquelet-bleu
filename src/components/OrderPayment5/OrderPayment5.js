import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {StripeProvider, Elements} from 'react-stripe-elements';

import CheckoutForm from '../CheckoutForm/CheckoutForm'

import ORDER_ACTIONS from '../../redux/actions/orderActions';

class OrderPayment extends Component {

  render() {
    return (this.props.newOrder.toDisplay.quantity ? (
      <div id="orderRoast">
        <h3>Order Form Page 5: Submit and Pay</h3>
        <p>Your order of {this.props.newOrder.toDisplay.quantity} oz. of {this.props.newOrder.toDisplay.roast.roast} roast {this.props.newOrder.toDisplay.bean.name} comes to ${this.props.newOrder.toDisplay.cost}.00.</p>
        <StripeProvider apiKey='pk_test_YOOTh9CE0vOGJLNC9WBPpXmr'>
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    ) : <Redirect to="/order/3" /> )
  }
}

const mapStateToProps = ({ newOrder }) => ({ newOrder })

export default connect(mapStateToProps)(OrderPayment);