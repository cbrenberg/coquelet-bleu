import React, { Component } from 'react';
import { connect } from 'react-redux';
import {injectStripe, CardElement} from 'react-stripe-elements';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm';
import StripeLogo from '../../images/powered_by_stripe.png';
import './CheckoutForm.css';

class CheckoutForm extends Component {


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: ORDER_ACTIONS.SUBMIT_ORDER, payload: this.props.toSubmit })
  }

  render() {
    return (
      <form id="checkoutForm" onSubmit={this.handleSubmit}>
          <ContactInfoForm />
        <label>Card Details
          <CardElement />
        </label>
        <img src={StripeLogo} alt="Powered by stripe" href="http://www.stripe.com" />
        <button type="submit">Place Order</button>
      </form>
    )
  }
}

const mapStateToProps = ({ newOrder }) => ({ toSubmit: newOrder.toSubmit })

export default injectStripe(connect(mapStateToProps)(CheckoutForm));