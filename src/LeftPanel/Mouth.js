import React from "react";
import "./LeftPanel.css";

function Mouth({ selectedObject }) {
  return (
    <div className="mouthDiv">
      <img
        className="mouthImg"
        src={require(`../alpaca/mouth/` + selectedObject.mouth)}
      />
    </div>
  );
}

export default Mouth;
