import React from "react";

import "./dropdown.css";

function Dropdown(props) {
  // value,
  const {
    onChange,
    value,
    title,
    option1,
    option2,
    option3,
    opt1,
    opt2,
    opt3,
  } = props;

  return (
    <div className="priority">
      {/* <label htmlFor="filter">{dropdown_title}</label>  */}
      <select
        name="filter"
        value={value}
        onChange={onChange}
        className="filter"
      >
        <option value="">{title}</option>
        <option value={opt1}>{option1}</option>
        <option value={opt2}>{option2}</option>
        <option value={opt3}>{option3}</option>
      </select>
    </div>
  );
}

export default Dropdown;
