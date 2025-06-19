import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function incrementOnClick() {
    dispatch(increment());
  }
  function decrementOnClick() {
    dispatch({ type: "counter/decrement" });
  }
  function resetOnClick() {
    dispatch(reset());
  }

  function incremtentByAmount() {
    dispatch({ type: "counter/incrementByAmount", payload: Number(amount) });
    setAmount(0);
  }

  return (
    <>
      <button onClick={incrementOnClick}>+</button>
      <p>counter : {count}</p>
      <button onClick={decrementOnClick}>-</button>
      <br />
      <button onClick={resetOnClick}>Reset</button>
      <br />
      <input
        type="number"
        placeholder="Enter the number to increment directly"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={incremtentByAmount}>increment by amount</button>
    </>
  );
}

export default App;
