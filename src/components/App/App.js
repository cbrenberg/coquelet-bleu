//import node modules
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//action constants
import ORDER_ACTIONS from '../../redux/actions/orderActions';


//import project components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import OrderPage from '../OrderPage/OrderPage';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import AdminPage from '../AdminPage/AdminPage';
import InventoryTable from '../InventoryTable/InventoryTable';
import Nav from '../Nav/Nav';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
    this.props.dispatch({ type: ORDER_ACTIONS.FETCH_INVENTORY });
    this.props.dispatch({ type: ORDER_ACTIONS.FETCH_ROASTS });
  }

  render() {
    return (
      <Router>
        <>
          <Header />
          <Nav />
          <div className="site-content">
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              <Redirect exact from="/admin" to="/admin/orders" />
              {/* Visiting localhost:3000/order will show the first page of the ordering process.
            This is a route anyone can see, no login necessary */}
              <Route
                path="/order"
                component={OrderPage}
              />
              {/* This is the route to the home page, where basic information about the company is displayed. */}
              <Route
                exact
                path="/home"
                component={HomePage}
              />
              <ProtectedRoute
                path="/admin"
                component={AdminPage}
              />
              <ProtectedRoute
                exact
                path="/inventory"
                component={InventoryTable}
              />
              {/* This will be the protected route to the admin side of the app, and only visible when logged in. */}
              <ProtectedRoute
                exact
                path="/login"
                component={LoginPage}
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
          {/* Allows any child component to display toast notifications */}
          <ToastContainer 
            position={toast.POSITION.TOP_RIGHT}
            toastClassName="dark-toast"
            transition={Slide}
            autoClose={3500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover/>
            <button onClick={()=>toast('Testing Toasts')}>Toast Me</button>
          <Footer />
        </>
      </Router>
    )
  }
}

export default connect()(App);
