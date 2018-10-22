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
import OrderSummary from '../OrderSummary/OrderSummary';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const OrderPage = () => (
  <Router>
    <div id="orderPage">

      <OrderProgressBar />
      <h1>
        Order Page
    </h1>
      <OrderFormNav />
      <Switch>
        <div className="orderFormNav">
          {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
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
        </div>
      </Switch>
      <OrderSummary />
    </div>
  </Router>


);

export default OrderPage;
