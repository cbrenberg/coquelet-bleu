import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import OrderSummary from '../OrderSummary/OrderSummary';



class OrderQuantity extends Component {
  state = {
    quantities: [],
    selection: '',
  }

  calculateAvailableQuantities = (ouncesInInventory) => {
    let quantities = [];
    for (let i = 4; i < ouncesInInventory && i <= 16; i += 4) {
      quantities.push(i);
    }
    this.setState({ quantities: quantities });
  }

  componentWillReceiveProps() {
    if (this.props.beanInfo) {
      this.calculateAvailableQuantities(this.props.beanInfo.quantity);
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 3 });
  }

  handleSelect = (event) => {
    this.setState({ selection: event.target.value })
    this.props.dispatch({ type: ORDER_ACTIONS.SET_QUANTITY, payload: Number(event.target.value) });
    this.props.dispatch({ type: ORDER_ACTIONS.DISPLAY_QUANTITY, payload: Number(event.target.value) });
    this.props.dispatch({ type: ORDER_ACTIONS.SET_COST, payload: (event.target.value * 1.25) })
  }

  render() {
    return (this.props.roastId ? (
      <div id="OrderQuantity">
        <h3>Order Form Page 3: Select Quantity</h3>
        {/* <p>You may select a quantity up to 1 lb. (16 oz.) in 4 oz. increments.</p> */}
        <select value={this.state.selection ? this.state.selection : ''} onChange={this.handleSelect}>
          <option value='' disabled>---How Many Beans?---</option>
          {this.state.quantities.map(item => {
            return <option key={item} value={item}>{item} oz.</option>
          })}
        </select>
        <OrderSummary />
        {/* <pre>{JSON.stringify(this.props.beanInfo, null, 2)}</pre>
        <pre>{JSON.stringify(this.state.quantities, null, 2)}</pre> */}
      </div>
    ) : <Redirect to="/order/2" /> )
  }
}

const mapStateToProps = ({ newOrder }) => ({ roastId: newOrder.toDisplay.roast.id, beanInfo: newOrder.toDisplay.bean });

export default connect(mapStateToProps)(OrderQuantity);