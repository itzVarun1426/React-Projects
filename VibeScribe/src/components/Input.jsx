import React, { useId } from "react";

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
    return (
      <div className="flex flex-col w-full">
        {label && (
          <label className={`mb-1 font-medium ${labelclassname}`} htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-full ${className}`}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
