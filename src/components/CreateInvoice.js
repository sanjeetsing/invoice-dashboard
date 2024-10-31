// CreateInvoice.js
import React from "react";
import "./CreateInvoice.css";

function CreateInvoice({ onBack }) {
  return (
    <div className="create-invoice">
      <div className="invoice-header">
        <button onClick={onBack} className="back-button">
          {"<"}
        </button>
        <h2>Invoice</h2>
      </div>

      <div className="section">
        <h3>Details</h3>
        <p>No. #10</p>
        <p>Mar 02, 2023</p>
        <p>Due on Mar 09, 2023</p>
      </div>

      <div className="section">
        <h3>Client</h3>
        <button className="add-button">+ Add client details</button>
      </div>

      <div className="section">
        <h3>Items</h3>
        <button className="add-button">+ Add items</button>
      </div>

      <div className="section">
        <h3>Total</h3>
        <p>Subtotal: ₹0.0</p>
        <p>Tax: ₹0.0</p>
        <p>
          <strong>Total: ₹0.0</strong>
        </p>
      </div>

      <div className="section">
        <h3>Note</h3>
        <button className="add-button">+ Add note</button>
      </div>

      <div className="section">
        <h3>Signature</h3>
        <button className="add-button">+ Add signature</button>
      </div>

      <div className="section">
        <h3>Photo</h3>
        <button className="add-button">+ Add photo</button>
      </div>

      <div className="invoice-actions">
        <button className="save-button">Save</button>
        <button className="share-button">Share</button>
      </div>
    </div>
  );
}

export default CreateInvoice;
