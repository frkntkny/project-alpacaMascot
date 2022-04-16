import React from "react";
import "./LeftPanel.css";
import eyes from "../alpaca/eyes/default.png";

function Eyes({ selectedObject }) {
  return (
    <div className="eyesDiv">
      <img
        className="earsImg"
        src={require(`../alpaca/eyes/` + selectedObject.eyes)}
      />
    </div>
  );
}

export default Eyes;
