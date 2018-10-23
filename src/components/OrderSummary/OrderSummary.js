import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoosterLogo from '../../images/rooster-logo-blue.png';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import Image from '../Image/Image';


class OrderSummary extends Component {
  state = {}

  componentDidMount() {
    this.props.dispatch({ type: ORDER_ACTIONS.CHOOSE_BEAN, payload: 1 });
    this.props.dispatch({ type: ORDER_ACTIONS.UPDATE_PROGRESS, payload: 20 });

  }

  render() {
    //takes just the selected bean property from redux store
    const selectedBean = this.props.userOrder.orderToDisplay.bean;
    if (selectedBean) {
      return (
        <div className="container">
          {/* <div className="imageDiv"> */}
          <Image
            src={selectedBean}
          />
          {/* TODO: get image to render properly even before componentDidMount returns props */}
          {/* <img id="logo" src={this.props.userOrder.orderToDisplay.bean.image_url} /> */}
          {/* </div> */}
          <div className="textDiv">
            <p>Display up to date order information here.</p>
            <ul>
              <li><strong>Selected Bean: </strong>{selectedBean.name}</li>
              <li><strong>Description: </strong>{selectedBean.origin_description}</li>
              <li><strong>Flavor Notes: </strong>{selectedBean.flavor_description}</li>
              <li><strong>Suggested Roasts: </strong>{selectedBean.roasts.join(', ')}</li>
            </ul>
            
            <pre>{JSON.stringify(selectedBean.id, null, 2)}</pre>
          </div>
        </div>
      )
    } else {
      return (
        <p>Still Loading...</p>
      )
    }
  }
};

const mapStateToProps = ({ userOrder }) => ({ userOrder })

export default connect(mapStateToProps)(OrderSummary);