import React from "react";
import Navbar from "../Navbar";
import "./dashboard.css";

import StatsCard from "../StatsCard/StatsCard";
import { useState } from "react";
import { Chart as Chartjs } from "chart.js/auto";

import { Bar, Pie } from "react-chartjs-2";
import Details from "../Details";

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
        <h2 className="title">Dashboard</h2>
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
                    backgroundColor: ["#f06565", "#fda552", "#64e26e"],
                  },
                ],
              }}
              options={{
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="details-pie-container">
        <Details bugData={bugData} />
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
                  backgroundColor: [
                    "rgb(244, 235, 215,0.9)",
                    "rgb(245, 175, 152)",
                    "rgb(100, 226, 110)",
                    "rgb(212,2,2,0.7)",
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
