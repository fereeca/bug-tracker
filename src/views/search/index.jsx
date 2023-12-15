import React from "react";
import "./search.css";
import searchImg from "./assets/search_104498.png";

function Search(props) {
  const { onChange, placeholder } = props;

  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <div className="searchIcon">
            <img src={searchImg} alt="Search Icon" width="20px" />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="search-input"
          />
        </div>
        <div className="dataResult"></div>
      </div>
    </>
  );
}
export default Search;
