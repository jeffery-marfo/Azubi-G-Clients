import React, { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = (path) =>
    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Client Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Nav Links - Now left-aligned with logo */}
          <div className="hidden md:block ml-10">
            <div className="flex items-baseline space-x-8">
              <Link to="/learner/homepage" className={navLinkClass("/learner/homepage")}>
                Home
              </Link>
              <Link to="/learner/courses" className={navLinkClass("/learner/courses")}>
                Courses
              </Link>
            </div>
          </div>

          {/* Auth Buttons - Now pushed to the right */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link
              to="/learner/login"
              className="text-blue-600 hover:text-blue-700 px-6 py-3 text-sm font-medium border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between min-w-[120px]"
            >
              <span>Login</span>
              <LogIn className="w-5 h-5 ml-3" />
            </Link>
            <Link
              to="/learner/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-between min-w-[140px]"
            >
              <span>Sign up</span>
              <LogIn className="w-5 h-5 ml-3" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/learner/homepage" className={navLinkClass("/learner/homepage")}>
              Home
            </Link>
            <Link to="/learner/courses" className={navLinkClass("/learner/courses")}>
              Courses
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200 space-y-3">
              <Link
                to="/learner/login"
                className="text-blue-600 hover:text-blue-700 px-6 py-3 text-sm font-medium border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span>Login</span>
                <LogIn className="w-5 h-5" />
              </Link>
              <Link
                to="/learner/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-between"
              >
                <span>Sign up</span>
                <LogIn className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;