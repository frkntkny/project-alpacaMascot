import React from "react";
import "./LeftPanel.css";

function Hair({ selectedObject }) {
  return (
    <div className="hairDiv">
      <img
        className="hairImg"
        src={require(`../alpaca/hair/` + selectedObject.hair)}
      />
    </div>
  );
}

export default Hair;
