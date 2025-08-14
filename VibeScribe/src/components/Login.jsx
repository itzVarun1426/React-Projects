import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 pt-20">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Sign in to your account
        </h2>

        <p className="mt-3 text-center text-base text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && (
          <p className="text-red-500 mt-6 text-center font-medium">{error}</p>
        )}

        <form
          onSubmit={handleSubmit(login)}
          autoComplete="off"
          className="mt-8 space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-black/40 border border-white/10 text-black placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="bg-black/40 border border-white/10 text-black placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              {...register("password", {
                required: "Password is required",
              })}
            />
          </div>

          {/* Button */}
          <Button
            type="submit"
            className="w-full py-3 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
