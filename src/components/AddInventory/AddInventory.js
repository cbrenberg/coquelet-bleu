import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ORDER_ACTIONS from '../../redux/actions/orderActions';
import RoosterLogoBW from '../../images/rooster-logo-bw.png';
import './AddInventory.css';

class AddInventory extends Component {
  state = {
    roastLevels: {},
    beanData: {},
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: ORDER_ACTIONS.ADD_INVENTORY, payload: this.state })
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      beanData: {
        ...this.state.beanData,
        [event.target.name]: event.target.value,
      }
    })
  }

  handleSelect = event => {
    this.setState({
      ...this.state,
      roastLevels: { ...this.state.roastLevels, [event.target.value]: event.target.checked }
    })
  }

  resetOrder = () => {
    this.props.dispatch({ type: ORDER_ACTIONS.RESET_ORDER });
    this.props.history.push('/home')
  }

  render() {
    return (
      <>
        <form id="inventoryFormParent" onSubmit={this.handleSubmit}>
          <div className="inventoryFormChild left">
            <label>Origin:
          <input required name="name" type="text" onChange={this.handleChange} value={this.state.name} />
            </label>
            <label>Origin Details:
          <textarea required rows='5' name="origin_description" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.origin_description} />
            </label>
            <br />
            <label>Flavor Description:
          <textarea required rows='5' name="flavor_description" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.flavor_description} />
            </label>
            <br />
            <label>Roasts: </label>
            <br />
            {this.props.roastLevels.map(roast => {
              return (
                <label key={roast.id}> {roast.roast}
                  <input type="checkbox" value={roast.id} onChange={this.handleSelect} /> 
                </label>
              )
            })}
          </div>
          <div className="inventoryFormChild">
            <label>Image URL:
          <input required name="image_url" type="text" onChange={this.handleChange} value={this.state.image_url} />
            </label>
            <img id="inventoryImgPreview" alt="product preview" src={this.state.beanData.image_url ? this.state.beanData.image_url : RoosterLogoBW} />
            <label>Quantity (oz):
          <input required name="quantity" type="number" onChange={this.handleChange} value={this.state.quantity} />
            </label>
            <label>Other notes (visible only to you):
          <textarea required rows='5' name="notes" type="text" onChange={this.handleChange} value={this.state.notes} />
            </label>
            <button type="submit">Add Inventory</button>
          </div>
        </form>
      </>
    )
  }
}

const AddInventoryWithRouter = withRouter(AddInventory);

const mapStateToProps = ({ newOrder, orderProgress, inventory }) => ({ toSubmit: newOrder.toSubmit, success: orderProgress.success, roastLevels: inventory.roastLevels })

export default connect(mapStateToProps)(AddInventoryWithRouter);