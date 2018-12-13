import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from '../Image/Image';
import BeanDetail from '../BeanDetail/BeanDetail';
import RoastDetail from '../RoastDetail/RoastDetail';
import QuantityDetail from '../QuantityDetail/QuantityDetail';


class OrderSummary extends Component {

  render() {
    //takes just the selected bean property from redux store
    const currentOrder = this.props.toDisplay;
    return (
      <div className="container">
        <Image
          src={currentOrder.bean.image_url}
        />
        <div className="textDiv">
          <ul id="orderSummaryList">
            <BeanDetail bean={currentOrder.bean} />
            <RoastDetail roast={currentOrder.roast} />
            <QuantityDetail quantity={currentOrder.quantity} />
          </ul>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ newOrder }) => ({ toDisplay: newOrder.toDisplay })

export default connect(mapStateToProps)(OrderSummary);