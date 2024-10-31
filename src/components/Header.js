import React from "react";
import "./Header.css";
import logo from "./logo.jpg";

function Header() {
  return (
    <div className="header">
      <h2 className="title">Invoice</h2>
      <div className="profile-pic">
        <img src={logo} alt="Profile" />
      </div>
    </div>
  );
}

export default Header;
