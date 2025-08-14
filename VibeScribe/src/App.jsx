import React, { useState, useEffect } from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";
import { FadeLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (user) dispatch(login({ user }));
        else dispatch(logout());
      } catch (err) {
        console.error("Error fetching current user:", err.message);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [dispatch]);

  return !loading ? (
    <div className="relative min-h-screen bg-transparent">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <FadeLoader height={15} loading radius={31} width={5} />
    </div>
  );
}

export default App;
