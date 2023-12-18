import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Button from "../Button";

function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="logo">
          <i className="fas fa-bug"></i>
          <h2>Pesticides</h2>
        </div>
        <div className="nav-btns">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {/* <Button title="Home" className="b" /> */}
            <div className="b">
              <i className="fas fa-home"></i>&nbsp; &nbsp;Home
            </div>
          </NavLink>

          <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
            {/* <Button title="Dashboard" className="b" /> */}
            <div className="b">
              <i className="fas fa-chart-line"></i>&nbsp; &nbsp;Dashboard
            </div>
          </NavLink>
        </div>

        <div className="login-info">
          <i className="fas fa-user"></i>
          <div className="ppl-name">Fereeca Tuladhar</div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
