import UserContextProvider from "./context/UserContextProvider";
import Login from "./component/Login";
import Profile from "./component/Profile";
import "./App.css";

function App() {
  
  return (
    <UserContextProvider>
    <h1>this is context practice file

    </h1>
    <Login></Login>
    <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
