import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import './ExpandRowToEdit.css'

class ExpandRowToEdit extends Component {
  state = { ...this.props.original };

  handleChange = (event) => {
    this.setState({
      ...this.state, [event.target.name]: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    console.log('submitting changes')
    this.props.dispatch({ type: ORDER_ACTIONS.EDIT_INVENTORY, payload: this.state })
  }


  render() {
    return (
      <form className="editInventory" onSubmit={this.submitForm}>
        <div className="inputsDiv">
          <div className="inputsDivChild">
            <label>Origin:
            <input required name='name' value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>Description:
            <textarea required rows="5" name='origin_description' value={this.state.origin_description} onChange={this.handleChange} />
            </label>
            <label>Quantity (oz.):
            <input required name='quantity' value={this.state.quantity} onChange={this.handleChange} />
            </label>
            <label>Image URL:
            <input name='image_url' value={this.state.image_url} onChange={this.handleChange} />
            </label>
          </div>
          <div className="inputsDivChild">
            <label>Flavor Description:
            <textarea required rows="5" name='flavor_description' value={this.state.flavor_description} onChange={this.handleChange} />
            </label>
            <label> Other Notes (not public):
            <textarea rows="5" name='notes' value={this.state.notes} onChange={this.handleChange} />
            </label>
            <button id="editInventorySubmit" type="submit">Submit Changes</button>
          </div>
        </div>


        {/* <pre>{JSON.stringify(this.state)}</pre> */}
      </form >
    )
  }
}

const mapStateToProps = ({ inventory, }) => ({ roasts: inventory.roastLevels })

export default connect(mapStateToProps)(ExpandRowToEdit);