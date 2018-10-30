import React from 'react';
import './OrderConfirmationModal.css';

const OrderConfirmationModal = ({ handleClose, show, children }) => {

  console.log(show ? "modal display-block" : "modal display-none");
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default OrderConfirmationModal;