import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoosterLogo from '../../images/rooster-logo-blue.png';
import ORDER_ACTIONS from '../../redux/actions/orderActions';


class OrderSummary extends Component {
  
  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.CHOOSE_BEAN })
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 20 });
  }

  render() {
    return (
      <div className="container">
        <div className="imageDiv">
          <img id="logo" src={RoosterLogo} />
        </div>
        <div className="textDiv">
          <p>Display up to date order information here.</p>
          
          <pre>{JSON.stringify(this.props.userOrder.orderToDisplay, null, 2)}</pre>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ userOrder }) => ({ userOrder })

export default connect(mapStateToProps)(OrderSummary);