import "./App.css";
import Display from "./components/Display.jsx";
import ButtonEle from "./components/ButtonEle.jsx";
function App() {
  return (
    <>
      <div className="CalculatorGrid">
        <Display />
        <div className="ButtonGrid">
          <ButtonEle />
        </div>
      </div>
    </>
  );
}

export default App;
