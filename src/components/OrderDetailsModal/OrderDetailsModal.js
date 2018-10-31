import React from 'react';
import './OrderDetailsModal.css';

const OrderDetailsModal = ({ handleClose, handleStatusChange, show, orderData, statusCodes }) => {
  let phoneNumber = '(' + orderData.phone.substring(0, 3) + ') ' + orderData.phone.substring(3, 6) + '-' + orderData.phone.substring(6);

  return (
    <div id="orderDetails" className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <h2>Order Details</h2>
        <hr />
        <div className="parent">
          <div className="child left">
            <h3>Customer Info</h3>
            <p>{orderData.first_name + ' ' + orderData.last_name}</p>
            <p>{orderData.street_address}</p>
            <p>{orderData.city}, {orderData.state} {orderData.zipcode}</p>
            <br />
            <p><a href={'mailto:' + orderData.email + '?Subject=Order%20Update%20From%20Coquelet%20Bleu'} >{orderData.email}</a></p>
            <br />
            <p>{phoneNumber}</p>
          </div>
          <div className="child right">
            <h3>Order Info</h3>
            <div className="orderDetailRow"><span>Selected Bean Origin: </span><strong>{orderData.name}</strong></div>
            <div className="orderDetailRow"><span>Roast Level: </span><strong>{orderData.roast}</strong></div>
            <div className="orderDetailRow"><span>Quantity: </span><strong>{orderData.quantity} oz.</strong></div>
            <div className="orderDetailRow"><span>Order Status: </span>
              <select name="order_status" onChange={handleStatusChange}>
                {statusCodes.map(code => {
                  return (
                    <option key={code.id} value={code.id} selected={code.status == orderData.status ? 'selected' : ''}>
                      {code.status}
                    </option>
                  )
                })}
              </select>
            </div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderDetailsModal;