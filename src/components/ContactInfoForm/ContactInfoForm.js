import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';

class ContactInfoForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    street_address: '',
    city: '',
    state: '',
    zipcode: '',
    phone: '',
    email: '',
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, [event.target.name]: event.target.value
    })
  }

  handleBlur = (event) => {
    this.props.dispatch({
      type: ORDER_ACTIONS.UPDATE_CONTACT_INFO,
      payload: {
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <>
        <label>First Name
          <input name='first_name' type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.first_name} />
        </label>
        <label>Last Name
          <input name="last_name" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.last_name} />
        </label>
        <label>Street Address
          <input name="street_address" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.street_address} />
        </label>
        <label>City
          <input name="city" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.city} />
        </label>
        <label>State
          <input name="state" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.state} />
        </label>
        <label>Zipcode
          <input name="zipcode" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.zipcode} />
        </label>
        <label>Phone
          <input name="phone" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.phone} />
        </label>
        <label>Email
          <input name="email" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.email} />
        </label>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    )
  }

}

export default connect()(ContactInfoForm);