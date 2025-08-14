import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";
import { FaHeart, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="md:w-1/3">
            <div className="mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm mb-1">
              &copy; {new Date().getFullYear()} VibeScribe. All Rights Reserved.
            </p>
            <p className="text-sm flex items-center gap-1">
              Made with <FaHeart className="text-red-500" /> by Varun
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Company */}
            <div>
              <h4 className="text-cyan-400 font-semibold uppercase tracking-wider mb-3 text-xs">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-400 font-semibold uppercase tracking-wider mb-3 text-xs">
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-400 font-semibold uppercase tracking-wider mb-3 text-xs">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-cyan-300">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-400 font-semibold uppercase tracking-wider mb-3 text-xs">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/itzVarun1426"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-cyan-300"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
