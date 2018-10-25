import React, { Component } from 'react';
import {injectStripe, CardElement} from 'react-stripe-elements';
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm';

class CheckoutForm extends Component {


  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <ContactInfoForm />
        <label>Card Details
          <CardElement />
        </label>
        <button type="submit">Place Order</button>
      </form>
    )
  }

}

export default injectStripe(CheckoutForm);