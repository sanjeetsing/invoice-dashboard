// NewInvoiceButton.js
import React from "react";
import "./NewInvoiceButton.css";

function NewInvoiceButton({ onClick }) {
  return (
    <button className="new-invoice-button" onClick={onClick}>
      + Create new invoice
    </button>
  );
}

export default NewInvoiceButton;
