import React, { Component } from 'react';
import { connect } from 'react-redux';
import ORDER_ACTIONS from '../../redux/actions/orderActions';
import './ContactInfoForm.css';

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
      <div className="contactInfoForm">
        <div className="contactInfoFormChild">
          <label>First Name
          <input required name='first_name' type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.first_name} />
          </label>
          <label>Last Name
          <input required name="last_name" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.last_name} />
          </label>
          <br />
          <label>Phone
          <input required name="phone" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.phone} />
          </label>
          <label>Email
          <input required name="email" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.email} />
          </label>
        </div>
        <div className="contactInfoFormChild">
          <label>Street Address
          <input required name="street_address" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.street_address} />
          </label>
          <label>City
          <input required name="city" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.city} />
          </label>
          <label>State
          <input required name="state" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.state} />
          </label>
          <label>Zipcode
          <input required name="zipcode" type="text" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.zipcode} />
          </label>
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    )
  }

}

export default connect()(ContactInfoForm);