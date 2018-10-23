import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';


class OrderOrigin extends Component {
  state = { selectedBeanId: '' };

  handleSelect = (event) => {
    this.setState({ selectedBeanId: event.target.value});
    this.props.dispatch({ type: ORDER_ACTIONS.SET_BEAN, payload: event.target.value })
    this.props.dispatch({ type: ORDER_ACTIONS.CHOOSE_BEAN, payload: event.target.value });
  }

  render() {

    return (
      <div id="orderOrigin">

        <h3>Order Form Page 1: Select bean origin</h3>
        <select value={this.state.selectedBeanId} onChange={this.handleSelect}>
        <option value=''>---Select a Bean---</option>
          {this.props.inventory.beanList.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })}
        </select>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    )
  }
}

const mapStateToProps = ({ inventory }) => ({ inventory })

export default connect(mapStateToProps)(OrderOrigin);