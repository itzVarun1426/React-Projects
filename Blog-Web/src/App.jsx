import { useDispatch } from "react-redux";
import { RTE, Button, PostForm } from "./components/components.js";
import { useState, useEffect, useRef } from "react";
import { authService } from "./appwrite/auth";
import "./App.css";
import { login, logout } from "./store/authSlice";
import { useForm } from "react-hook-form";

function App() {
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // useEffect(() => {

  //   authService
  //     .getCurrentUser()
  //     .then((user) => {
  //       if (user) {
  //         dispatch(SignUp({ userData: user }));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // return !loading ? (

  const { control, handleSubmit } = useForm();

  const ref = useRef(null);
  const formSubmitted = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex flex-wrap  bg-gray-400">
      <PostForm />
    </div>
  );
  // ) : null;
}

export default App;
