import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import OrderSummary from '../OrderSummary/OrderSummary';



class OrderRoast extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 2 });
  }

  handleSelect = (event) => {
    this.setState({selection: event.target.value})
    this.props.dispatch({ type: ORDER_ACTIONS.CHOOSE_ROAST, payload: event.target.value });
  }

  render() {

    return (
      <div id="orderRoast">

        <h3>Order Form Page 2: Select Roast</h3>
        <select value={this.state.selection ? this.state.selection : ''} onChange={this.handleSelect}>
          <option value='' disabled>---Select a Roast---</option>
          {this.props.roastLevels.map(item => {
            return <option key={item.id} value={item.id}>{this.props.suggestedRoasts.includes(item.roast) ? '*' : ''}{item.roast}</option>
          })}
        </select>
        <OrderSummary />
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    )
  }
}

const mapStateToProps = ({ inventory, newOrder }) => ({ roastLevels: inventory.roastLevels, suggestedRoasts: newOrder.toDisplay.bean.roasts })

export default connect(mapStateToProps)(OrderRoast);