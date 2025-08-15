import React, { useId, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = React.forwardRef(
  (
    {
      label,
      labelclassname = "text-red",
      type = "text",
      placeholder = "",
      className = "",
      ...props
    },
    ref
  ) => {
    const id = useId();
    const [showPassword, setShowPassword] = useState(false);

    const isPasswordType = type === "password";

    return (
      <div className="flex flex-col w-full relative">
        {label && (
          <label className={`mb-1 font-medium ${labelclassname}`} htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={isPasswordType ? (showPassword ? "text" : "password") : type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-full ${className} ${
            isPasswordType ? "pr-10" : ""
          }`}
          {...props}
        />

        {isPasswordType && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-[52%] transform -translate-y-1/2 cursor-pointer 
              text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
