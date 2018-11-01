import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectStripe, CardElement } from 'react-stripe-elements';
import axios from 'axios';
import {toast } from 'react-toastify';

//redux action constants
import ORDER_ACTIONS from '../../redux/actions/orderActions';

//view components
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm';
import OrderConfirmationModal from '../OrderConfirmationModal/OrderConfirmationModal';
import StripeLogo from '../../images/powered_by_stripe.png';
//styles
import './CheckoutForm.css';

class CheckoutForm extends Component {
  toastId = null;

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ 
      name: this.props.toSubmit.first_name + ' ' + this.props.toSubmit.last_name,
      address_zip: this.props.toSubmit.zipcode,
    });
    await axios.post('/charge', {
      headers: { "Content-Type": "text/plain" },
      data: token.id,
      amount: this.props.toSubmit.cost,
    }).then(response => {
      console.log("Purchase Complete!");
      this.props.dispatch({ type: ORDER_ACTIONS.SUBMIT_ORDER, payload: this.props.toSubmit })
      toast.dismiss(this.toastid);
    }).catch(error => {
      console.log('Error creating stripe charge:', error);
    })
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.submit();
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 5 });
    this.toastId = toast.success('Your order is being processed...');
  }

  resetOrder = () => {
    this.props.dispatch({ type: ORDER_ACTIONS.RESET_ORDER });
    this.props.history.push('/home')
  }

  render() {
    return (
      <>
        <form id="checkoutForm" onSubmit={this.handleSubmit}>
          <ContactInfoForm />
          <div className="stripeInputWithLogo">
            <label>Card Details
            <CardElement hidePostalCode/>
            </label>
            <img src={StripeLogo} alt="Powered by stripe" href="http://www.stripe.com" />
          </div>
          <button type="submit">Place Order</button>
        </form>
        <OrderConfirmationModal show={this.props.success} handleClose={this.resetOrder}>
          <h4>Congratulations!</h4>
          <p> You placed an order. Stay tuned for updates.</p>
        </OrderConfirmationModal>
      </>
    )
  }
}

const CheckoutFormWithRouter = withRouter(CheckoutForm);

const mapStateToProps = ({ newOrder, orderProgress }) => ({ toSubmit: newOrder.toSubmit, success: orderProgress.success })

export default injectStripe(connect(mapStateToProps)(CheckoutFormWithRouter));