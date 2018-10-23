import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoosterLogo from '../../images/rooster-logo-blue.png';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import Image from '../Image/Image';


class OrderSummary extends Component {
  state = {}

  componentDidMount() {
    
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 20 });
  }

  render() {
    //takes just the selected bean property from redux store
    const currentOrder = this.props.inventory.orderToDisplay;
    if (currentOrder.bean) {
      return (
        <div className="container">
          {/* <div className="imageDiv"> */}
          <Image
            src={currentOrder.bean}
          />
          <div className="textDiv">
            <ul>
              <li><strong>Selected Bean: </strong>{currentOrder.bean.name}</li>
              <li><strong>Description: </strong>{currentOrder.bean.origin_description}</li>
              <li><strong>Flavor Notes: </strong>{currentOrder.bean.flavor_description}</li>
              <li><strong>Suggested Roasts: </strong>{currentOrder.bean.roasts.join(', ')}</li>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <p>Choose Your Bean</p>
      )
    }
  }
};

const mapStateToProps = ({ inventory }) => ({ inventory })

export default connect(mapStateToProps)(OrderSummary);