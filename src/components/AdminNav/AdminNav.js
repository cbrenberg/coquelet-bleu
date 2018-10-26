import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import { connect } from 'react-redux';


class AdminNav extends Component {

  render() {
    return (
      <div className="verticalNav">
        <NavLink to='/admin/orders'>Manage Orders</NavLink>
        <NavLink to='/admin/inventory'>View Inventory</NavLink>
        <NavLink to='/admin/orders'>Add Beans</NavLink>
      </div>
    )
  }
}

export default connect()(AdminNav);