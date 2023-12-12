import React, { useState } from "react";
import "./index.css";

const Dropdown = ({ value, onChange, dropdown_title }) => {
  const handleChangeFilter = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="priority">
      <label htmlFor="filter">{dropdown_title}</label>
      <select name="filter" value={value} onChange={handleChangeFilter}>
        <option value="">-- Please Select --</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
};

export default Dropdown;
