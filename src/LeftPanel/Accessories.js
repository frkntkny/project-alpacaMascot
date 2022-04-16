import React from "react";
import "./LeftPanel.css";

function Accessories({ selectedObject }) {
  return (
    <div className="accessoriesDiv">
      <img
        className="accessoriesImg"
        src={require(`../alpaca/accessories/` + selectedObject.accessories)}
      />
    </div>
  );
}

export default Accessories;
