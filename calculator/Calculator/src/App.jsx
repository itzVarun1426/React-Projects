import "./App.css";
import Display from "./components/Display.jsx";
import ButtonEle from "./components/ButtonEle.jsx";
import CalculatorGrid from "./components/CalculatorGrid.jsx";
import { useState } from "react";

function App() {
  // let text = "this is test text";

  let [text, setText] = useState("There is no text");

  const DisplayValue = (e) => {
    setText((prev) =>
      prev === "There is no text" ? e.target.value : e.target.value
    );
  };

  return (
    <>
      <CalculatorGrid>
        <Display DisplayValue={DisplayValue} />
        <p>{text}</p>
        <div className="ButtonGrid">
          <ButtonEle DisplayValue={DisplayValue} />
        </div>
      </CalculatorGrid>
    </>
  );
}

export default App;
