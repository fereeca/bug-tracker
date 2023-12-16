import React from "react";
import Navbar from "../Navbar";
import "./dashboard.css";

import StatsCard from "../StatsCard/StatsCard";
import { useState } from "react";
import { Chart as Chartjs } from "chart.js/auto";

import { Bar, Pie } from "react-chartjs-2";

function Dashboard() {
  const [bugData, setBugData] = useState(getFromLocalStorage("bug"));

  function handleReducer(array, key, match) {
    return array.reduce((total, bug) => {
      if (bug[key] === match) {
        return total + 1;
      }
      return total;
    }, 0);
  }

  const noOfHighPriority = handleReducer(bugData, "priority", "High");
  const noOfMediumPriority = handleReducer(bugData, "priority", "Medium");
  const noOfLowPriority = handleReducer(bugData, "priority", "Low");

  const noOfOpenStatus = handleReducer(bugData, "status", "Open");
  const noOfInprogressStatus = handleReducer(bugData, "status", "In Progress");
  const noOfCompleteStatus = handleReducer(bugData, "status", "Complete");
  const noOfFailedStatus = handleReducer(bugData, "status", "Failed");

  // const no
  return (
    <div className="dashboard-container">
      <div className="nav-dash">
        <Navbar />
      </div>
      <div className="dashboard-content">
        <div className="title">
          <h1>Dashboard</h1>
        </div>
        <div className="stats-container">
          <StatsCard bugData={bugData} />
        </div>
        <div className="charts-container">
          <div className="bar-chart">
            <Bar
              data={{
                labels: ["High", "Medium", "Low"],
                datasets: [
                  {
                    label: "No of Bugs",
                    data: [
                      noOfHighPriority,
                      noOfMediumPriority,
                      noOfLowPriority,
                    ],
                  },
                ],
              }}
              options={{
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
          <div className="pie-chart">
            <Pie
              data={{
                labels: ["Open", "InProgress", "Complete", "Failed"],
                datasets: [
                  {
                    label: "No of Bugs",
                    data: [
                      noOfOpenStatus,
                      noOfInprogressStatus,
                      noOfCompleteStatus,
                      noOfFailedStatus,
                    ],
                  },
                ],
              }}
              options={{
                responsive: true,

                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function getFromLocalStorage(key) {
  const localData = localStorage.getItem(key);
  if (!localData) {
    return [];
  }
  return JSON.parse(localData);
}
export default Dashboard;
