import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full bg-blue-200 text-blue-800 font-semibold"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
