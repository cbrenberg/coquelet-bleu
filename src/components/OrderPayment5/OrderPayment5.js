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
        <p>Your order of {this.props.newOrder.toDisplay.quantity} oz. of {this.props.newOrder.toDisplay.roast.roast} roast {this.props.newOrder.toDisplay.bean.name} comes to ${this.props.newOrder.toDisplay.cost}.00.</p>
        <StripeProvider apiKey="pk_test_YOOTh9CE0vOGJLNC9WBPpXmr">
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      </div>
    )
  }
}

const mapStateToProps = ({ newOrder }) => ({ newOrder })

export default connect(mapStateToProps)(OrderPayment);