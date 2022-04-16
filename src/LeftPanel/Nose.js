import React from "react";
import "./LeftPanel.css";
import nose from "../alpaca/nose/nose.png";

function Nose({ selectedObject }) {
  return (
    <div className="noseDiv">
      <img
        className="noseImg"
        src={require(`../alpaca/nose/` + selectedObject.nose)}
      />
    </div>
  );
}

export default Nose;
