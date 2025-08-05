import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-xl backdrop-blur-md">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Logo width="100px" />
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-4 md:gap-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      className={`relative px-4 py-2 text-base md:text-lg font-semibold rounded-lg transition-all duration-300
                        ${
                          location.pathname === item.slug
                            ? "bg-white text-indigo-700 shadow-md"
                            : "hover:bg-white/20 hover:text-yellow-300"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
            )}

            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn className="px-5 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg shadow-md transition duration-300 hover:scale-105" />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
