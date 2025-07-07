import React, { useId } from "react";

const Select = ({
  options,
  label,
  className = "",
  selectRef,
  placeholder = "select option",
  ...props
}) => {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={selectRef}
        className="
      bg-white text-black outline-none rounded-lg px-3 py-2 focus:bg-gray-50 duration-200 border border-gray-200 w-full
      "
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
