import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <h1>this is redux practice </h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
