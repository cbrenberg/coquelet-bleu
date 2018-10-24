import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
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



class OrderPage extends Component {

  handleClick = (event) => {
    console.log(Number.isInteger(Number(this.props.location.pathname.substr(-1))))
    // if (Number.isInteger(Number(this.props.location.pathname.substr(-1)))) {
    // let nextPath = Number(this.props.location.pathname.substr(-1)) + Number(event.target.value);
    // this.props.history.push(`/order/${Number(nextPath)}`);
    // } else {
    //   this.props.history.push('/order/1');
    // }
  }

  render() {
    return (
      <Router>
        <div id="orderPage">
          <OrderProgressBar />
          <div className="orderFormFlexContainer">
            <div className="orderFormFlexChild">
              <OrderFormNav />
            </div>
            <div className="orderFormFlexChild">
              {/* <div className="orderFormNav"> */}
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
              {/* </div> */}
              <OrderSummary />
            </div>
            <div className="orderFormFlexChild orderFormButtonContainer">
              <button id="previous" value='-1' onClick={this.handleClick}>Previous</button>
              <button id="next" value='1' onClick={this.handleClick}>Next</button>
            </div>
          </div>
        </div>
      </Router >
    )
  }
}

// const mapStateToProps = state => ({ state });

export default connect()(OrderPage);
