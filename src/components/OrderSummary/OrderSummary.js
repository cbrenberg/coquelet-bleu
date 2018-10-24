import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import Image from '../Image/Image';


class OrderSummary extends Component {

  render() {
    //takes just the selected bean property from redux store
    const currentOrder = this.props.toDisplay;
    if (this.props.toDisplay.bean && !this.props.toDisplay.roast) {
      return (
        <div className="container">
          <Image
            src={currentOrder.bean.image_url}
          />
          <div className="textDiv">
            <ul id="orderSummaryList">
              <li><strong>Selected Bean: </strong>{currentOrder.bean.name}</li>
              <li><strong>Description: </strong>{currentOrder.bean.origin_description}</li>
              <li><strong>Flavor Notes: </strong>{currentOrder.bean.flavor_description}</li>
              <li><strong>Suggested Roasts: </strong>{currentOrder.bean.roasts.join(', ')}</li>
            </ul>
          </div>

        </div>
      )
    } else if (this.props.toDisplay.roast) {
      return (
        <div className="container">
          <Image
            src={currentOrder.bean.image_url}
          />
          <div className="textDiv">
            <ul id="orderSummaryList">
              <li><strong>Selected Bean: </strong>{currentOrder.bean.name}</li>
              <li><strong>Description: </strong>{currentOrder.bean.origin_description}</li>
              <li><strong>Flavor Notes: </strong>{currentOrder.bean.flavor_description}</li>
              <li><strong>Selected Roast: </strong>{currentOrder.roast.roast}</li>
              <li><strong>Roast Description: </strong>{currentOrder.roast.description}</li>
            </ul>
          </div>

        </div>
      )
    } else {
      return (
        // <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <h5>Make some choices, already!</h5>
      )
    }
  }
};

const mapStateToProps = ({ newOrder }) => ({ toDisplay: newOrder.toDisplay })

export default connect(mapStateToProps)(OrderSummary);