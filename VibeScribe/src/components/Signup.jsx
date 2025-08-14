import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      await authService.createAccount(data);
      const currentUser = await authService.getCurrentUser();

      if (currentUser) {
        dispatch(login(currentUser));
        navigate("/");
      } else {
        setError("Account created but failed to fetch user info.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message || "Something went wrong during signup.");
    }
  };

  return (
    <div className="mt-0 min-h-screen flex items-center justify-center bg-black px-4 pt-20">
      {/* pt-20 ensures it starts below the navbar */}

      {/* Form Container */}
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl animate-fadeIn">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Sign up to create account
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-center text-base text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:underline"
          >
            Sign In
          </Link>
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 mt-6 text-center font-medium">{error}</p>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit(create)}
          autoComplete="off"
          className="mt-8 space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="Enter your full name"
              className="bg-black/40 border border-white/10 text-black placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              {...register("name", {
                required: "Full name is required",
              })}
            />
          </div>

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
                    "Email address must be a valid address",
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
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
