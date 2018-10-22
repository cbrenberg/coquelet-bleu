import React, { Component } from 'react';
import axios from 'axios';
import RoosterLogo from '../../images/rooster-logo-blue.png';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class OrderSummary extends Component {
  state = { orders: ['']
    // {[
    //   Object
    // ]}
  }

  getOrderInfo = () => {
    axios.get('/api/orders')
      .then(response => {
        this.setState({ orders: response.data})
      })
      .catch(error => console.log('error getting orders', error))
  }


  componentDidMount() {
    this.getOrderInfo();
  }

  render() {
    return (
      <div className="container">
        <div className="imageDiv">
          <img id="logo" src={RoosterLogo} />
        </div>
        <div className="textDiv">
          <p>Display up to date order information here.</p>
          
          <pre>{JSON.stringify(this.state.orders, null, 2)}</pre>
        </div>
      </div>
    )
  }
};

export default OrderSummary;