import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <nav className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 shadow-lg">
          {/* Logo */}
          <Link
            to="/"
            className="hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            <Logo width="32px" height="32px" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-4 sm:gap-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      className={`relative font-medium px-3 py-1 transition-all duration-200 rounded-full
                        ${
                          location.pathname === item.slug
                            ? "text-cyan-300 shadow"
                            : "text-white hover:text-cyan-300"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn className="px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-200" />
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-cyan-300 transition-colors"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg animate-slideDown">
            <ul className="flex flex-col gap-3">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <Link
                        to={item.slug}
                        onClick={() => setMenuOpen(false)}
                        className={`block w-full text-center px-4 py-2 rounded-full transition-all duration-200
                          ${
                            location.pathname === item.slug
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                              : "text-white hover:bg-white/10"
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
              )}
              {authStatus && (
                <li className="flex justify-center">
                  <LogoutBtn className="px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-200" />
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
