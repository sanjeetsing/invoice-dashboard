// RecentTransactions.js
import React from "react";
import "./RecentTransactions.css";

function RecentTransactions() {
  const transactions = [
    {
      id: "#10",
      date: "Mar 02, 2023",
      amount: "₹100.0",
      status: "Saved",
      due: "Due in 4 days",
    },
    {
      id: "#11",
      date: "Mar 03, 2023",
      amount: "₹200.0",
      status: "Saved",
      due: "Due in 5 days",
    },
    {
      id: "#12",
      date: "Mar 04, 2023",
      amount: "₹300.0",
      status: "Saved",
      due: "Due in 6 days",
    },
  ];

  return (
    <div className="recent-transactions">
      <div className="header2">
        <h3 className="title2">Recent</h3>
        <a className="title3" href="/">
          View all
        </a>
      </div>
      {transactions.map((txn, index) => (
        <div className="transaction" key={index}>
          <div>
            <p>{txn.id}</p>
            <p>{txn.date}</p>
            <span className="status">{txn.status}</span>
          </div>
          <div>
            <p>Loreum Ipsum</p>
            <p>{txn.amount}</p>
            <p className="due">{txn.due}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;
