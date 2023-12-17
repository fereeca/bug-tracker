import React from "react";
import "./details.css";

function Details(props) {
  const { bugData } = props;

  const totalBugs = bugData.length;

  const totalActiveBugs = bugData.reduce((total, bug) => {
    if (bug.status === "Open") {
      return total + 1;
    }
    return total;
  }, 0);

  const totalInProgressdBugs = bugData.reduce((total, bug) => {
    if (bug.status === "In Progress") {
      return total + 1;
    }
    return total;
  }, 0);

  const totalFailedBugs = bugData.reduce((total, bug) => {
    if (bug.status === "Failed") {
      return total + 1;
    }
    return total;
  }, 0);

  const totalHighBugs = bugData.reduce((total, bug) => {
    if (bug.priority === "High") {
      return total + 1;
    }
    return total;
  }, 0);

  const totalMediumBugs = bugData.reduce((total, bug) => {
    if (bug.priority === "Medium") {
      return total + 1;
    }
    return total;
  }, 0);

  const totalLowBugs = bugData.reduce((total, bug) => {
    if (bug.priority === "Low") {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <>
      <div className="detail-container">
        <h2 className="details-title">Details</h2>
        <div className="bug-details-container">
          <div className="title-no">
            <div className="topics">Total Bugs </div>
            <div className="totalBugs">{totalBugs}</div>
          </div>
          <div className="title-no">
            <div className="topics">Open </div>
            <div className="activeBugs">{totalActiveBugs}</div>
          </div>
          <div className="title-no">
            <div className="topics">In-Progress </div>
            <div className="inProgress">{totalInProgressdBugs}</div>
          </div>
          <div className="title-no">
            <div className="topics">Failed </div>
            <div className="failed">{totalFailedBugs}</div>
          </div>
          <div className="title-no">
            <div className="topics">Complete </div>
            <div className="complete">100</div>
          </div>
          <div className="title-no">
            <div className="topics">High </div>
            <div className="highbugs">{totalHighBugs}</div>
          </div>
          <div className="title-no">
            <div className="topics">Medium </div>
            <div className="mediumbugs">{totalMediumBugs}</div>
          </div>
          <div className="title-no">
            <div className="topics">Low </div>
            <div className="lowbugs">{totalLowBugs}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
