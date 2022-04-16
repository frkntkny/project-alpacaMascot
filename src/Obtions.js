import React from "react";
import Button from "./Button";
import ObtionButton from "./ObtionButton";
import alpaca from "./data";

function Obtions({ selection, setSelectedObject, selectedObject }) {
  if (selection === "Accessories") {
    return Object.keys(alpaca.accessories).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.accessories[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else if (selection === "Ears") {
    return Object.keys(alpaca.ears).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.ears[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else if (selection === "Eyes") {
    return Object.keys(alpaca.eyes).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.eyes[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else if (selection === "Hair") {
    return Object.keys(alpaca.hair).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.hair[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else if (selection === "Leg") {
    return Object.keys(alpaca.leg).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.leg[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else if (selection === "Mouth") {
    return Object.keys(alpaca.mouth).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.mouth[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else if (selection === "Neck") {
    return Object.keys(alpaca.neck).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.neck[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else if (selection === "Nose") {
    return Object.keys(alpaca.nose).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.nose[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else if (selection === "Backgrounds") {
    return Object.keys(alpaca.backgrounds).map(function (key, index) {
      return (
        <div>
          <ObtionButton
            selection={selection}
            setSelectedObject={setSelectedObject}
            name={alpaca.backgrounds[key]}
          ></ObtionButton>
        </div>
      );
    });
  } else {
    return <div>Something is not right</div>;
  }
  //   return Object.keys(alpaca).map(function (key, index) {
  //     return <div>{JSON.stringify(key)}</div>;
  //   });
}

export default Obtions;
