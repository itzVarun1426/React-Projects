import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-indigo-500 px-3 py-2 text-white relative">
      <div className="flex justify-between items-center">
        <div className="text-2xl cursor-pointer font-bold text-indigo-900">
          Practice
        </div>

        <ul className="hidden md:flex gap-3 font-semibold text-black">
          <li className="cursor-pointer m-[10px]">Home</li>
          <li className="cursor-pointer m-[10px]">Store</li>
          <li className="cursor-pointer m-[10px]">Contact</li>
        </ul>

        <button className="bg-indigo-700 p-[6px] rounded-lg cursor-pointer font-semibold hidden md:block">
          Login/Signup
        </button>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-4xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#8801;
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden mt-3 font-semibold gap-2">
          <a href="#" className="cursor-pointer">
            Home
          </a>
          <a href="#" className="cursor-pointer">
            Store
          </a>
          <a href="#" className="cursor-pointer">
            Contact
          </a>
          <button className="bg-indigo-700 p-2 rounded-lg cursor-pointer font-semibold">
            Login/Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
