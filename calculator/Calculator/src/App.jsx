import "./App.css";
import Display from "./components/Display.jsx";
import ButtonEle from "./components/ButtonEle.jsx";
import CalculatorGrid from "./components/CalculatorGrid.jsx";
function App() {
  let text = "this is test text";
  const DisplayValue = (e) => {
    console.log(e.target.value);
    text = e.target.value;
  };
  return (
    <>
      <CalculatorGrid>
        <Display DisplayValue={DisplayValue}/>
        <p>{text}</p>
        <div className="ButtonGrid">
          <ButtonEle />
        </div>
      </CalculatorGrid>
    </>
  );
}

export default App;
