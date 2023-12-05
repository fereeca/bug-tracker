import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./buglist.css";

function BugList() {
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="inner-layout">
          <Sidebar />
          <div>Bug List</div>
        </div>
      </div>
    </>
  );
}
export default BugList;
