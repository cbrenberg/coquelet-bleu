import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from '../Image/Image';


class OrderSummary extends Component {

  render() {
    //takes just the selected bean property from redux store
    const currentOrder = this.props.toDisplay;
    //TODO: reorganize redux store to build an array for 'toDisplay' that can be mapped as <ul>
    if (!this.props.toDisplay.bean && !this.props.toDisplay.roast && !this.props.toDisplay.quantity) {
      return (
        // <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <h5>Make some choices, already!</h5>
      )
    } else if (this.props.toDisplay.bean && !this.props.toDisplay.roast && !this.props.toDisplay.quantity) {
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
    } else if (this.props.toDisplay.bean && this.props.toDisplay.roast && !this.props.toDisplay.quantity) {
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
              <li><strong>Quantity: </strong>{currentOrder.quantity} oz.</li>
              <li><strong>Total Cost: </strong>${currentOrder.quantity * 1.25}.00</li>
            </ul>
          </div>
        </div>
      )
    }
  }
};

const mapStateToProps = ({ newOrder }) => ({ toDisplay: newOrder.toDisplay })

export default connect(mapStateToProps)(OrderSummary);