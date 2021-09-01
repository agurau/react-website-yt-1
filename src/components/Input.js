import React from "react";

const Input = (props) => {
  return (
    <div className="input">
      <label>{props.title}</label>
      <input />
    </div>
  );
};

export default Input;
