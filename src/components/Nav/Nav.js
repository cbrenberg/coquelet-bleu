import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '../../images/FacebookIcon.svg';
import './Nav.css';

const Nav = () => (
  <div className="nav">
    <div>
      <NavLink className="nav-item" to="/home">
        Home
    </NavLink>
      <NavLink className="nav-item" to="/order">
        Order
    </NavLink>
    </div>
    <div>
      <a target="_blank" rel="noopener noreferrer" id='socialMediaLink' href="https://www.facebook.com/coqueletbleucoffee/" ><img src={FacebookIcon} alt="Facebook Profile" /></a>
    </div>
  </div>
);

export default Nav;