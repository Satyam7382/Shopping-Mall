import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = (path) =>
    `block md:inline-block px-3 py-2 text-base font-medium ${
      location.pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white fixed w-full top-0 shadow-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-wide hover:text-blue-800 transition"
        >
          Satlini Mall
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/" className={navLinkClass("/")}>Home</Link>
          <Link to="/stores" className={navLinkClass("/stores")}>Stores</Link>
          <Link to="/explore" className={navLinkClass("/explore")}>Explore</Link>
          <Link to="/about" className={navLinkClass("/about")}>About</Link>
          <Link to="/contact" className={navLinkClass("/contact")}>Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
          <Link to="/" className={navLinkClass("/")}>Home</Link>
          <Link to="/stores" className={navLinkClass("/stores")}>Stores</Link>
          <Link to="/explore" className={navLinkClass("/explore")}>Explore</Link>
          <Link to="/about" className={navLinkClass("/about")}>About</Link>
          <Link to="/contact" className={navLinkClass("/contact")}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
