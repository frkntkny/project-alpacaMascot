import React from "react";
import "./LeftPanel.css";

function Ears({ selectedObject }) {
  return (
    <div className="earsDiv">
      <img
        className="earsImg"
        src={require(`../alpaca/ears/` + selectedObject.ears)}
      />
    </div>
  );
}

export default Ears;
