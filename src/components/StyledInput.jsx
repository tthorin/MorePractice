import React, { useState,useEffect } from "react";
import "./styled-input.css";

const StyledInput = ({value,setValue,label}) => {
  const [hasFocus, setHasFocus] = useState("");
  const [smallLabel,setSmallLabel] = useState("");

  useEffect(()=>{
	if(value) setSmallLabel(value.length > 0 ? " small" : "")
  },[value]);

  return (
    <div className="input-container">
      <input
        className={"styled-input"+hasFocus}
        onFocus={() => setHasFocus(" focused")}
        onBlur={(e) => {setHasFocus("");setSmallLabel(e.target.value.length > 0 ? " small" : "")}}
		value={value}
		onChange={(e) => {
			if (setValue) setValue(e.target.value);
			setSmallLabel(e.target.value.length > 0 ? " small" : "")
		}}
        type="text"
      />
      <label className={"styled-label "+smallLabel+hasFocus} htmlFor="text">{label}</label>
    </div>
  );
};

export default StyledInput;
