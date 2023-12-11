// import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import Button from "../Button";
import "./buglist.css";
import BugReportingForm from "../BugReportingForm";
import Bug from "../Bug";

function BugList() {
  const [modal, setModal] = useState(false);
  const [bugData, setBugData] = useState(getFromLocalStroage("bug"));

  const onAddSuccess = (data) => {
    setBugData((prev) => {
      return [...prev, data];
    });
    toggleModal();
  };

  useEffect(() => {
    localStorage.setItem("bug", JSON.stringify(bugData));
  }, [bugData]);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const onBugDelete = (id) => {
    setBugData((prev) => {
      const filterdData = prev.filter((bug) => {
        return bug.id !== Number(id);
      });
      return filterdData;
    });
  };

  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="inner-layout">
          <div className="side">
            <Sidebar />
          </div>
          <div className="bug">
            <div className="container">
              <h1>Bug List</h1>
              <div className="btn1">
                <Button onClick={toggleModal} title="Report a bug" />
                {modal && (
                  <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                      <button className="close-modal" onClick={toggleModal}>
                        &times;
                      </button>
                      <BugReportingForm onAddSuccess={onAddSuccess} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <table className="category-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Project</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {bugData.map((bug) => (
                  <Bug bug={bug} key={bug.id} onBugDelete={onBugDelete} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

function getFromLocalStroage(key) {
  const localData = localStorage.getItem(key);
  if (!localData) {
    return [];
  }
  return JSON.parse(localData);
}
export default BugList;
