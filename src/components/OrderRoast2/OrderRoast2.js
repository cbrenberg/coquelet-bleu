import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';


class OrderRoast extends Component {
  state = {};

  handleSelect = (event) => {
    this.setState({selection: event.target.value})
    this.props.dispatch({ type: ORDER_ACTIONS.CHOOSE_ROAST, payload: event.target.value });
  }

  render() {

    return (
      <div id="orderRoast">

        <h3>Order Form Page 2: Select Roast</h3>
        <select value={this.state.selectedRoast ? this.state.selectedRoast : ''} onChange={this.handleSelect}>
          <option value='' disabled>---Select a Roast---</option>
          {this.props.roastLevels.map(item => {
            return <option key={item.id} value={item.id}>{item.roast}</option>
          })}
        </select>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}

const mapStateToProps = ({ inventory }) => ({ roastLevels: inventory.roastLevels })

export default connect(mapStateToProps)(OrderRoast);