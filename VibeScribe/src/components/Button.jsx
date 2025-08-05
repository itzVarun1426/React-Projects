import React from "react";

const Button = ({
  children,
  type = "button",
  textColor = "text-white",
  bgColor = "bg-gradient-to-br from-[var(--highlight-cyan)] to-[var(--primary-blue)]", // Default to new gradient
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--highlight-cyan)] focus:ring-opacity-75 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
