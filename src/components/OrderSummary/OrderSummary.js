import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoosterLogo from '../../images/rooster-logo-blue.png';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import Image from '../Image/Image';


class OrderSummary extends Component {
  state = {}
  
  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.CHOOSE_BEAN, payload: 1});
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 20 });
    
  }

  render() {
    return (
      <div className="container">
        <div className="imageDiv">
          <Image
            bean={this.props.userOrder.orderToDisplay.bean} 
          />
        {/* TODO: get image to render properly even before componentDidMount returns props */}
          {/* <img id="logo" src={this.props.userOrder.orderToDisplay.bean.image_url} /> */}
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