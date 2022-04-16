import React from "react";
import "./LeftPanel.css";

function Leg({ selectedObject }) {
  return (
    <div className="legDiv">
      <img
        className="legImg"
        src={require(`../alpaca/leg/` + selectedObject.leg)}
      />
    </div>
  );
}

export default Leg;
