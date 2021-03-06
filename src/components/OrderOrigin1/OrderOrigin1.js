import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import OrderSummary from '../OrderSummary/OrderSummary';


class OrderOrigin extends Component {
  state = {};

  handleSelect = (event) => {
    this.setState({ selection: event.target.value })
    this.props.dispatch({ type: ORDER_ACTIONS.CHOOSE_BEAN, payload: event.target.value });
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 1 });
  }

  render() {

    return (
      <div id="orderOrigin">

        <h3>Order Form Page 1: Select bean origin</h3>
        <select value={this.state.selection ? this.state.selection : ''} onChange={this.handleSelect}>
          <option value='' disabled>---Select a Bean---</option>
          {this.props.beansInStock.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })}
        </select>
        <OrderSummary />
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    )
  }
}

const mapStateToProps = ({ inventory, newOrder }) => ({ beansInStock: inventory.beansInStock, selectedBean: newOrder.toDisplay.bean })

export default connect(mapStateToProps)(OrderOrigin);