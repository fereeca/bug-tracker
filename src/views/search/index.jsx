import React from "react";
import "./index.css";

function Search(props) {
  const { onChange, placeholder } = props;

  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder={placeholder} onChange={onChange} />
          <div className="searchIcon"></div>
        </div>
        <div className="dataResult"></div>
      </div>
    </>
  );
}
export default Search;
