import React, { useState } from "react";
import "./styled-input.css";

const StyledInput = (props) => {
  const [hasFocus, setHasFocus] = useState("");
  const [smallLabel,setSmallLabel] = useState("");
  return (
    <div className="input-container">
      <input
        className={"styled-input"+hasFocus}
        onFocus={() => setHasFocus(" focused")}
        onBlur={() => setHasFocus("")}
		onChange={(e) => setSmallLabel(e.target.value.length>0?" small":"")}
        type="text"
      />
      <label className={"styled-label "+smallLabel+hasFocus} htmlFor="text">{props.label}</label>
    </div>
  );
};

export default StyledInput;
