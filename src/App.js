import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import alpaca, { getRandomProperty } from "./data";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const exportAsImage = async (element, imageFileName) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
    fakeLink.href = blob;
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    fakeLink.remove();
  };

  const [selectedObject, setSelectedObject] = useState({
    accessories: alpaca.accessories.flower,
    backgrounds: alpaca.backgrounds.blue70,
    ears: alpaca.ears.tiltBackward,
    eyes: alpaca.eyes.default,
    hair: alpaca.hair.bang,
    leg: alpaca.leg.bubbkeTea,
    mouth: alpaca.mouth.astonished,
    neck: alpaca.neck.default,
    nose: alpaca.nose.default,
  });

  console.log(selectedObject.accessories);

  function randomButton() {
    const Raccessories = getRandomProperty(alpaca.accessories);
    const Rbackgrounds = getRandomProperty(alpaca.backgrounds);
    const Rears = getRandomProperty(alpaca.ears);
    const Reyes = getRandomProperty(alpaca.eyes);
    const Rhair = getRandomProperty(alpaca.hair);
    const Rleg = getRandomProperty(alpaca.leg);
    const Rmouth = getRandomProperty(alpaca.mouth);
    const Rneck = getRandomProperty(alpaca.neck);
    const Rnose = getRandomProperty(alpaca.nose);

    setSelectedObject((prevState) => ({
      ...prevState,
      accessories: alpaca.accessories[Raccessories],
      backgrounds: alpaca.backgrounds[Rbackgrounds],
      ears: alpaca.ears[Rears],
      eyes: alpaca.eyes[Reyes],
      hair: alpaca.hair[Rhair],
      leg: alpaca.leg[Rleg],
      mouth: alpaca.mouth[Rmouth],
      neck: alpaca.neck[Rneck],
      nose: alpaca.nose[Rnose],
    }));
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mx-3 ">
          <h1 className="mx-3 my-5 fw-bolder">ALPACA GENERATOR</h1>
        </div>
        <div className="row">
          <div className="col">
            <LeftPanel
              selectedObject={selectedObject}
              randomButton={randomButton}
              exportAsImage={exportAsImage}
            ></LeftPanel>
          </div>
          <div className="col">
            <RightPanel
              setSelectedObject={setSelectedObject}
              selectedObject={selectedObject}
            ></RightPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
