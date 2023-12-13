import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-btns">
          <Link to="/">Home</Link>
          <Link to="/dashboard">dashboard</Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
