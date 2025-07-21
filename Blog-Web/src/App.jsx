import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { authService } from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components/components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-400">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* 🔥 This renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
