import React, { Component } from 'react';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';

import { connect } from 'react-redux';

import './AdminNav.css';


class AdminNav extends Component {

  render() {
    return (
      <div className="verticalNav">
        <NavLink exact={true} className="viewNav" to='/admin/orders'>Manage Orders</NavLink>
        <NavLink exact={true} className="viewNav" to='/admin/inventory'>View Inventory</NavLink>
        <NavLink exact={true} className="viewNav" to='/admin/orders'>Add Beans</NavLink>
      </div>
    )
  }
}

export default withRouter(connect()(AdminNav));