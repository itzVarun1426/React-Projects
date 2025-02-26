import "./index.css";
import { useState } from "react";
import Buttons from "./Buttons";

function App() {
  const [color, setColor] = useState("white");
  function changeColor(newColor) {
    setColor(newColor);
  }

  return (
    <div className="container " style={{ backgroundColor: color }}>
      <h1>Background Color Changer</h1>
      <div className="btn-container">
        <Buttons changeColor= {changeColor} />
      </div>
    </div>
  );
}
export default App;
