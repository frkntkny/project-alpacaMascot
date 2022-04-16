import React, { useState } from "react";
import Button from "./Button";
import Obtions from "./Obtions";

function RightPanel({ setSelectedObject, selectedObject }) {
  const [selection, setSelection] = useState("Ears");

  function handleRadioChange(event) {
    setSelection(event.target.value);
  }

  return (
    <div className="">
      <div className="container">
        <div className="row w-auto mx-3 my-3">
          <div className="col">
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Accessories"
              handleRadioChange={handleRadioChange}
            ></Button>
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Ears"
              handleRadioChange={handleRadioChange}
            ></Button>
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Eyes"
              handleRadioChange={handleRadioChange}
            ></Button>
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Hair"
              handleRadioChange={handleRadioChange}
            ></Button>
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Leg"
              handleRadioChange={handleRadioChange}
            ></Button>
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Mouth"
              handleRadioChange={handleRadioChange}
            ></Button>
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Neck"
              handleRadioChange={handleRadioChange}
            ></Button>
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Nose"
              handleRadioChange={handleRadioChange}
            ></Button>
            <Button
              selection={selection}
              setSelection={setSelection}
              value="Backgrounds"
              handleRadioChange={handleRadioChange}
            ></Button>
          </div>
        </div>
        <hr></hr>
        <div className="row w-auto mx-3 my-3">
          <div className="col">
            <Obtions
              selection={selection}
              handleRadioChange={handleRadioChange}
              setSelectedObject={setSelectedObject}
              selectedObject={selectedObject}
            ></Obtions>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
