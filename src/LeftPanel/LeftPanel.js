import React, { useRef } from "react";
import "./LeftPanel.css";
import Hair from "./Hair";
import Ears from "./Ears";
import Eyes from "./Eyes";
import Mouth from "./Mouth";
import Nose from "./Nose";
import Neck from "./Neck";
import Accessories from "./Accessories";
import Leg from "./Leg";
import Background from "./Background";

function LeftPanel({ selectedObject, randomButton, exportAsImage }) {
  const exportRef = useRef();
  if (selectedObject) {
    return (
      <>
        <div ref={exportRef}>
          <div className="mainDiv d-flex justify-content-center ">
            <Background selectedObject={selectedObject}></Background>
            <Ears selectedObject={selectedObject}></Ears>
            <Neck selectedObject={selectedObject}></Neck>
            <Hair selectedObject={selectedObject}></Hair>
            <Accessories selectedObject={selectedObject}></Accessories>
            <Eyes selectedObject={selectedObject}></Eyes>
            <Nose selectedObject={selectedObject}></Nose>
            <Mouth selectedObject={selectedObject}></Mouth>
            <Leg selectedObject={selectedObject}></Leg>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col mx-3 my-3 d-flex justify-content-center">
              <button type="button" class="btn btn-dark" onClick={randomButton}>
                🎲 Random
              </button>
            </div>
            <div className="col mx-3 my-3 d-flex justify-content-center ">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => exportAsImage(exportRef.current, "test")}
              >
                🏞️ Download
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LeftPanel;
