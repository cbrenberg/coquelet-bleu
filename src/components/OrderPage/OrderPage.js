import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './OrderPage.css';

import OrderProgressBar from '../OrderProgressBar/OrderProgressBar';
import OrderFormNav from '../OrderFormNav/OrderFormNav';
import OrderOrigin1 from '../OrderOrigin1/OrderOrigin1';
import OrderRoast2 from '../OrderRoast2/OrderRoast2';
import OrderQuantity3 from '../OrderQuantity3/OrderQuantity3';
import OrderReview4 from '../OrderReview4/OrderReview4';
import OrderPayment5 from '../OrderPayment5/OrderPayment5';
import OrderSummary from '../OrderSummary/OrderSummary';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const OrderPage = () => (
  <Router>
    <div id="orderPage">

      <OrderProgressBar />
      <div className="orderFormFlexContainer">
        <div className="orderFormFlexChild">
          <OrderFormNav />
        </div>
        <div className="orderFormFlexChild">
          <div className="orderFormNav">
            <Switch>

              <Route
                exact
                path="/order"
                component={OrderOrigin1}
              />
              <Route
                exact
                path="/order/2"
                component={OrderRoast2}
              />
              <Route
                exact
                path="/order/3"
                component={OrderQuantity3}
              />
              <Route
                exact
                path="/order/4"
                component={OrderReview4}
              />
              <Route
                exact
                path="/order/5"
                component={OrderPayment5}
              />

            </Switch>
          </div>
          <OrderSummary />
        </div>

      </div>
    </div>
  </Router>


);

export default OrderPage;
