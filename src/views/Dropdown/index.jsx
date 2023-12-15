import React from "react";

import "./dropdown.css";

function Dropdown(props) {
  // value,
  const {
    onChange,
    // dropdown_title,
    value,
    // filter,
    // handleFilterChange,
  } = props;

  return (
    <div className="priority">
      {/* <label htmlFor="filter">{dropdown_title}</label> */}
      <select
        name="filter"
        value={value}
        onChange={onChange}
        className="filter"
      >
        <option value="">Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}

export default Dropdown;
