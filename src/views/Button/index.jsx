import React from "react";
import "./index.css";

function Button(props) {
  const { title, onClick, className } = props;
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
}
export default Button;
