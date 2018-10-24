import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoosterLogo from '../../images/rooster-logo-blue.png';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import Image from '../Image/Image';


class OrderSummary extends Component {
  
  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 20 });
  }

  render() {
    //takes just the selected bean property from redux store
    const currentOrder = this.props.newOrder.inventory;
    if (currentOrder.roasts) {
      return (
        <div className="container">
          <Image
            src={currentOrder.image_url}
          />
          <div className="textDiv">
            <ul>
              <li><strong>Selected Bean: </strong>{currentOrder.name}</li>
              <li><strong>Description: </strong>{currentOrder.origin_description}</li>
              <li><strong>Flavor Notes: </strong>{currentOrder.flavor_description}</li>
              <li><strong>Suggested Roasts: </strong>{currentOrder.roasts.join(', ')}</li>
            </ul>
          </div>
          
        </div>
      )
    } else {
      return (
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      )
    }
  }
};

const mapStateToProps = ({ newOrder }) => ({ newOrder })

export default connect(mapStateToProps)(OrderSummary);