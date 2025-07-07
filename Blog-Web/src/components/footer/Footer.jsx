import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-400 border-t-2 border-black text-gray-900">
      <div className="w-full mx-auto px-4 py-10">
        <div className="-mx-6 flex flex-wrap">
          {/* Logo & Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12 flex flex-col justify-between">
            <div className="mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-700">
              &copy; 2025 VibeScribe. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-600 tracking-wider">
              Company
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="hover:text-gray-700" to="/">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-gray-700" to="/">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-gray-700" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-700" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-600 tracking-wider">
              Support
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="hover:text-gray-700" to="/">
                  Account
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-gray-700" to="/">
                  Help
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-gray-700" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-700" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-600 tracking-wider">
              Legals
            </h3>
            <ul>
              <li className="mb-2">
                <Link className="hover:text-gray-700" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:text-gray-700" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-700" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-10 border-t pt-6 border-gray-500 text-sm text-center text-gray-700">
          Made by Varun using tailwind css React , React Router, and Vite.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
