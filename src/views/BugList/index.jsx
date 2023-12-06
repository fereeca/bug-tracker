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
          <div className="side">
            {" "}
            <Sidebar />
          </div>
          <div className="bug">
            <div className="submit-bug">
              <button>Submit Bug</button>
            </div>
            <table className="category-table">
              <tr>
                <th>Bug Category</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Bug ID</td>
                <td>1</td>
                <td>Unable to add new item in cart</td>
              </tr>
              <tr>
                <td>Bug ID</td>
                <td>1</td>
                <td>Unable to add new item in cart</td>
              </tr>
              <tr>
                <td>Bug ID</td>
                <td>1</td>
                <td>Unable to add new item in cart</td>
              </tr>
              <tr>
                <td>Bug ID</td>
                <td>1</td>
                <td>Unable to add new item in cart</td>
              </tr>
              <tr>
                <td>Bug ID</td>
                <td>1</td>
                <td>Unable to add new item in cart</td>
              </tr>
              <tr>
                <td>Bug ID</td>
                <td>1</td>
                <td>Unable to add new item in cart</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default BugList;
