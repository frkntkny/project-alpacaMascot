import React from "react";
import "./LeftPanel.css";

function Neck({ selectedObject }) {
  return (
    <div className="neckDiv">
      <img
        className="neckImg"
        src={require(`../alpaca/neck/` + selectedObject.neck)}
      />
    </div>
  );
}

export default Neck;
