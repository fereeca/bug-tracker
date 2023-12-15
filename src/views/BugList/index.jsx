// import React from "react";
import Navbar from "../Navbar";

import { useState, useEffect, useCallback } from "react";
import Button from "../Button";
import "./buglist.css";
import BugReportingForm from "../BugReportingForm";
import Bug from "../Bug";
import { useMemo } from "react";
import Dropdown from "../Dropdown";
import Search from "../search";

function BugList() {
  const [modal, setModal] = useState(false);
  const [bugData, setBugData] = useState(getFromLocalStorage("bug"));
  const [editBug, setEditBug] = useState(null);
  const [filter, setFilter] = useState();
  const [searchData, setSearchData] = useState([]);
  // const [query, setQuery] = useState("");

  const onAddSuccess = (data) => {
    setBugData((prev) => {
      return [...prev, data];
    });

    toggleModal();
  };

  const updateBug = useCallback((updatedBug) => {
    const updatedBugs = bugData.map((bug) =>
      bug.id === updatedBug.id ? updatedBug : bug
    );

    setBugData(updatedBugs);
    setEditBug(null);
    toggleModal();
  }, []);

  useEffect(() => {
    localStorage.setItem("bug", JSON.stringify(bugData));
  }, [bugData]);

  const toggleModal = useCallback(() => {
    setModal((prev) => !prev);
  }, []);

  const onBugDelete = useCallback(
    (id) => {
      setBugData((prev) => {
        const filterdData = prev.filter((bug) => {
          return bug.id !== Number(id);
        });
        return filterdData;
      });
    },
    [setBugData]
  );

  const onBugEdit = useCallback(
    (bug) => {
      setEditBug(bug);
      toggleModal();
    },
    [setEditBug, toggleModal]
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredList = useMemo(() => {
    function getFilteredList() {
      if (!filter) {
        return bugData;
      }
      return bugData.filter((newBug) => newBug.priority === filter);
    }

    return getFilteredList();
  }, [filter, bugData]);

  const handleSearch = (event) => {
    setSearchData(event.target.value);
  };

  const searchbar = useMemo(() => {
    if (!searchData) {
      return bugData;
    }
    return bugData.filter(
      (newBug) =>
        newBug.title.includes(searchData) ||
        newBug.project.includes(searchData) ||
        newBug.description.includes(searchData)
    );
  }, [searchData, bugData]);

  const combinedData = filteredList.filter((bug) =>
    searchbar.some((searchedBug) => searchedBug.id === bug.id)
  );

  return (
    <>
      <div className="layout">
        <div className="nav">
          <Navbar />
        </div>

        <div className="bug">
          <div className="container">
            <h1>Bug List</h1>
            <Search placeholder="search Bugs" onChange={handleSearch} />

            <div className="filter-btn">
              <Dropdown
                // dropdown_title={"Priority"}
                onChange={handleFilterChange}
              />
            </div>
            <Button
              onClick={toggleModal}
              title="Report a bug"
              className="btn"
            />
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
            {combinedData.length > 0 ? (
              <tbody>
                {combinedData.map((bug) => (
                  <Bug
                    bug={bug}
                    key={bug.id}
                    onBugDelete={onBugDelete}
                    onBugEdit={onBugEdit}
                  />
                ))}
              </tbody>
            ) : (
              <p>NO BUGS</p>
            )}
          </table>
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
