import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <div className="nav">
    <NavLink className="nav-item" to="/home">
      Home
    </NavLink>
      <NavLink className="nav-item" to="/order">
        Order
      </NavLink>
  </div>
);

export default Nav;