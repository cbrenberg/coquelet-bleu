import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Header.css';
import RoosterLogoBW from '../../images/rooster-logo-bw.png'

const Header = (props) => (
  <div className="header">
    <Link to="/home">
      <img src={RoosterLogoBW} alt="rooster logo" className="nav-logo" />
      <h2 className="nav-title">Coquelet Bleu Coffee</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/login">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Admin Home' : 'Admin Login'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          {/* <Link className="nav-link" to="/admin">
            Admin Home
          </Link> */}
          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      {/* MOVE ABOUT LINK TO MAIN NAVBAR LATER */}
      {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
