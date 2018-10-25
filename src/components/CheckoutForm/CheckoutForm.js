import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {injectStripe, CardElement} from 'react-stripe-elements';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm';
import OrderConfirmationModal from '../OrderConfirmationModal/OrderConfirmationModal';
import StripeLogo from '../../images/powered_by_stripe.png';
import './CheckoutForm.css';

class CheckoutForm extends Component {


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: ORDER_ACTIONS.SUBMIT_ORDER, payload: this.props.toSubmit })
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
        <label>Card Details
          <CardElement />
        </label>
        <img src={StripeLogo} alt="Powered by stripe" href="http://www.stripe.com" />
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