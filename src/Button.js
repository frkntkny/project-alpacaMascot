import React from "react";
import "./Button.css";

function Button({ value, selection, setSelection, handleRadioChange }) {
  console.log("selection : " + selection + " value : " + value);

  return (
    <div className="myButtonDiv w-auto">
      <div className="radio-toolbar w-auto ">
        <button
          className="obtionButton"
          onClick={() => {
            setSelection(value);
          }}
        >
          {value}
        </button>
      </div>
    </div>
  );
}

export default Button;
