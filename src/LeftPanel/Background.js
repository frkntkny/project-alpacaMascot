import React from "react";
import "./LeftPanel.css";

function Background({ selectedObject }) {
  return (
    <div className="backgroundsDiv">
      <img
        className="backgroundsImg"
        src={require(`../alpaca/backgrounds/` + selectedObject.backgrounds)}
      />
    </div>
  );
}

export default Background;
