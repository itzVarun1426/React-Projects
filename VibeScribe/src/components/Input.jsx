import React, { useId } from "react";

const Input = React.forwardRef(
  (
    { label, type = "text", placeholder = "", className = "", ...props },
    ref
  ) => {
    const id = useId();
    return (
      <div className={`flex flex-col ${className}`}>
        {label && (
          <label className="text-gray-700 mb-1" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          placeholder={placeholder}
          id={id}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
