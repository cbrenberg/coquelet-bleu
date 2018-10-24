import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';


class OrderQuantity extends Component {

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 3 });
  }

  render() {
    return (
      <div id="OrderQuantity">
        <h3>Order Form Page 3: Select Quantity</h3>
      </div>
    )
  }
}

export default connect()(OrderQuantity);