// Summary.js
import React from "react";
import "./Summary.css";

function Summary() {
  return (
    <div className="summary">
      <div className="amount1">
        <p>Amount Raised</p>
        <h3>₹10,000</h3>
      </div>
      <div className="amount">
        <p>Amount Paid</p>
        <h3>₹5,000</h3>
      </div>
    </div>
  );
}

export default Summary;
