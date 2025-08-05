import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";
import { FaHeart, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[var(--primary-blue)] text-[var(--text-secondary)] border-t border-[var(--accent-blue)]">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="mb-4 inline-flex items-center">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              &copy; {new Date().getFullYear()} VibeScribe. All Rights Reserved.
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-1 flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> by Varun
            </p>
          </div>

          <div className="w-full md:w-2/3 p-4 flex flex-wrap justify-around">
            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-[var(--highlight-cyan)]">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-[var(--highlight-cyan)]">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-[var(--highlight-cyan)]">
                Legal
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200"
                    to="/"
                  >
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-[var(--highlight-cyan)]">
                Connect
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="https://github.com/your-github-profile/VibeScribe" // Replace with your actual GitHub repo
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--highlight-cyan)] transition-colors duration-200 flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </li>
                {/* Add more social links as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
