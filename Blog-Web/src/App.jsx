import { useDispatch } from "react-redux";
import { Header, Footer, PostCard } from "./components/components.js";
import { useState, useEffect, useRef } from "react";
import { authService } from "./appwrite/auth";
import "./App.css";
import { login, logout } from "./store/authSlice";


function App() {
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // useEffect(() => {

  //   authService
  //     .getCurrentUser()
  //     .then((user) => {
  //       if (user) {
  //         dispatch(login({ userData: user }));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // return !loading ? (
  const ref = useRef(null);
  return (
    <div className="min-h-screen flex flex-wrap  bg-gray-400">
      <div className="w-full">
        <Header />
        <main className="flex-grow">{/* TODO:  <Outlet /> */}</main>
        <PostCard></PostCard>
        <Footer />
      </div>
    </div>
  );
  // ) : null;
}

export default App;
