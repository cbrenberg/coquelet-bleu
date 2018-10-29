import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import './OrderPage.css';

import OrderProgressBar from '../OrderProgressBar/OrderProgressBar';
import OrderFormNav from '../OrderFormNav/OrderFormNav';
import OrderOrigin1 from '../OrderOrigin1/OrderOrigin1';
import OrderRoast2 from '../OrderRoast2/OrderRoast2';
import OrderQuantity3 from '../OrderQuantity3/OrderQuantity3';
import OrderReview4 from '../OrderReview4/OrderReview4';
import OrderPayment5 from '../OrderPayment5/OrderPayment5';
import FormNavButton from '../FormNavButton/FormNavButton';
import UpArrow from '../../images/arrow-up-circle.svg';
import DownArrow from '../../images/arrow-down-circle.svg';



class OrderPage extends Component {

  render() {
    return (
      <Router>
        <div id="orderPage">
          <OrderProgressBar />
          <div className="orderFormFlexContainer">
            <div className="orderFormFlexChild nav">
              <OrderFormNav />
            </div>
            <div className="orderFormFlexChild content">
              <Switch>
                {/* TODO: redirect to '/order' if selections have not been made */}
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
            <div className="orderFormFlexChild orderFormButtonContainer">
              <FormNavButton 
                id="previous"
                path={this.props.history.location.pathname === '/order/2' ? null : this.props.history.location.pathname.substr(-1) - 1} 
                text="Previous Page" 
                src={UpArrow}
                hidden={this.props.history.location.pathname === '/order'}
              />
              <FormNavButton 
                id="next"
                path={this.props.history.location.pathname === '/order' ? 2 : Number(this.props.history.location.pathname.substr(-1)) + 1} 
                text="Next Page"
                src={DownArrow}
                hidden={this.props.history.location.pathname === '/order/5'} 
              />
            </div>
          </div>
        </div>
      </Router >
    )
  }
}

const OrderPageWithRouter = withRouter(OrderPage);

const mapStateToProps = ({newOrder}) => ({newOrder});

export default connect(mapStateToProps)(OrderPageWithRouter);
