import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  }


  render() {
    return (
      <form className="editInventory" onSubmit={this.submitForm}>
        <div className="inputsDiv">
          <label>Origin
            <input name='name' value={this.state.name} onChange={this.handleChange} placeholder={this.props.original.name} />
          </label>
          <label>Description
            <textarea rows="5" name='origin_description' value={this.state.origin_description} onChange={this.handleChange} placeholder={this.props.original.origin_description} />
          </label>
          <label>Quantity (oz.)
            <input name='quantity' value={this.state.quantity} onChange={this.handleChange} placeholder={this.props.original.quantity} />
          </label>
          <label>Flavor Description
            <textarea rows="5" name='flavor_description' value={this.state.flavor_description} onChange={this.handleChange} placeholder={this.props.original.flavor_description} />
          </label>
          <label> Other Notes (not public)
            <textarea rows="5" name='notes' value={this.state.notes} onChange={this.handleChange} placeholder={this.props.original.notes} />
          </label>
        </div>
        <button class="editInventorySubmit" type="submit">Submit Changes</button>

        {/* <pre>{JSON.stringify(this.state)}</pre> */}
      </form>
    )
  }
}

const mapStateToProps = ({ inventory, }) => ({ roasts: inventory.roastLevels })

export default connect(mapStateToProps)(ExpandRowToEdit);