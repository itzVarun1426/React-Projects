import "./App.css";
import Display from "./components/Display.jsx";
import ButtonEle from "./components/ButtonEle.jsx";
import CalculatorGrid from "./components/CalculatorGrid.jsx";
import { useState } from "react";

function App() {
  // let text = "this is test text";

  let [text, setText] = useState("");

  const DisplayValue = (e) => {
    const value = e.target.innerText;
    if (value === "=") {
      try {
        setText(Function('"use strict";return (' + text + ")")());
      } catch {
        setText("Error");
      }
    } else if (value === "C") {
      setText("");
    } else if (value === "<-") {
      if (text.length > 0) setText(text.slice(0, -1));
    } else {
      setText(text + value);
    }
  };

  return (
    <>
      <CalculatorGrid>
        <Display DisplayValue={text} />
        <div className="ButtonGrid">
          <ButtonEle DisplayValue={DisplayValue} />
        </div>
      </CalculatorGrid>
    </>
  );
}

export default App;
