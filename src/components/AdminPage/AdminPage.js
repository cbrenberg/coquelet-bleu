import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import './AdminPage.css';

import AdminNav from '../AdminNav/AdminNav';
import OrderTable from '../OrderTable/OrderTable';
import InventoryTable from '../InventoryTable/InventoryTable';
import AddInventory from '../AddInventory/AddInventory';




class OrderPage extends Component {

  render() {
    return (
      <Router>
        <div id="adminPage">
          <div className="orderFormFlexContainer">
            <div className="orderFormFlexChild nav">
              <AdminNav />
            </div>
            <div className="orderFormFlexChild table">
              {/* <div className="orderFormNav"> */}
              <Switch>
                <Route
                  exact
                  path="/admin/orders"
                  component={OrderTable}
                />
                <Route
                  exact
                  path="/admin/inventory"
                  component={InventoryTable}
                />
                {/* TODO: ADD INVENTORY COMPONENT GOES BELOW (OR IN TABLE) */}
                <Route
                  exact
                  path="/admin/add"
                  component={AddInventory}
                />
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