import React, { useState } from "react";
import "./styled-input.css";

const StyledInput = (props) => {
  return (
    <div className="input-container">
      <label className="styled-label">
        {props.label}
        <input className="styled-input" type="text" />
      </label>
    </div>
  );
};

export default StyledInput;
