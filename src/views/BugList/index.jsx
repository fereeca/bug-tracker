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
  const [bugData, setBugData] = useState(getFromLocalStorage("bug"));
  const [editBug, setEditBug] = useState(null);

  const onAddSuccess = (data) => {
    setBugData((prev) => {
      return [...prev, data];
    });

    toggleModal();
  };

  const updateBug = (updatedBug) => {
    const updatedBugs = bugData.map((bug) =>
      bug.id === updatedBug.id ? updatedBug : bug
    );
    setBugData(updatedBugs);
    setEditBug(null); // Reset edit bug after update
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

  const onBugEdit = (bug) => {
    setEditBug(bug);
    toggleModal();
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
                      <BugReportingForm
                        onAddSuccess={onAddSuccess}
                        bugToEdit={editBug}
                        updateBug={updateBug}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {bugData.length > 0 ? (
              <table className="category-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bugData.map((bug) => (
                    <Bug
                      bug={bug}
                      key={bug.id}
                      onBugDelete={onBugDelete}
                      onBugEdit={onBugEdit}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <p>NO BUGS</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function getFromLocalStorage(key) {
  const localData = localStorage.getItem(key);
  if (!localData) {
    return [];
  }
  return JSON.parse(localData);
}
export default BugList;
