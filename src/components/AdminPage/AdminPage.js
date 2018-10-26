import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import { connect } from 'react-redux';
import './AdminPage.css';

import AdminNav from '../AdminNav/AdminNav';
import OrderTable from '../OrderTable/OrderTable';
import InventoryTable from '../InventoryTable/InventoryTable';
import OrderRoast2 from '../OrderRoast2/OrderRoast2';




class OrderPage extends Component {

  render() {
    return (
      <Router>
        <div id="adminPage">
          <div className="orderFormFlexContainer">
            <div className="orderFormFlexChild">
              <AdminNav />
            </div>
            <div className="orderFormFlexChild">
              {/* <div className="orderFormNav"> */}
              <Switch>
                <ProtectedRoute
                  exact
                  path="/admin/orders"
                  component={OrderTable}
                />
                <ProtectedRoute
                  exact
                  path="/admin/inventory"
                  component={InventoryTable}
                />
                {/* TODO: ADD INVENTORY COMPONENT GOES BELOW (OR IN TABLE) */}
                {/* <Route
                  exact
                  path="/admin/add"
                  component={}
                /> */}
              </Switch>
              {/* </div> */}
            </div>
          </div>
        </div>
      </Router >
    )
  }
}

export default connect()(OrderPage);