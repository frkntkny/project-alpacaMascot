import React from "react";
import "./ObtionButton.css";

function ObtionButton({ name, setSelectedObject, selection }) {
  if (selection) {
    const myData = selection.toLowerCase();

    return (
      <div className="obtionButtonDiv">
        <button
          className="obtionButton"
          onClick={() => {
            setSelectedObject((prevState) => ({
              ...prevState,
              [myData]: name,
            }));
          }}
        >
          {name}
        </button>
      </div>
    );
  } else {
    return <div>Please Select</div>;
  }
}

export default ObtionButton;
