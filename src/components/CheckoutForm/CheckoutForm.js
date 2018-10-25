import React, { Component } from 'react';
import {injectStripe, CardElement} from 'react-stripe-elements';
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm';
import StripeLogo from '../../images/powered_by_stripe.png';
import './CheckoutForm.css';

class CheckoutForm extends Component {


  handleSubmit = (event) => {
    event.preventDefault();
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

export default injectStripe(CheckoutForm);