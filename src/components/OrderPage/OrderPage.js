import React from 'react';
import './OrderPage.css';
import OrderProgressBar from '../OrderProgressBar/OrderProgressBar';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const OrderPage = () => (
  <div id="orderPage">
    <OrderProgressBar />
    <h1>
      Order Page
    </h1>
  </div>
);

export default OrderPage;
