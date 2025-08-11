import React from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import azubiLogo from "../assets/images/azubiLogo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#01589A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <img src={azubiLogo} alt="Client Logo" className="h-16 w-auto" />
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <div className="space-y-3">
              <Link to="/learner/homepage" className="block hover:text-blue-200">
                Home
              </Link>
              <Link to="/learner/courses" className="block hover:text-blue-200">
                Courses
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>+233410020000</p>
            <p>New Reiss, Ghana, Accra</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <a href="#" className="block hover:text-blue-200 underline">
              LinkedIn
            </a>
            <a href="#" className="block hover:text-blue-200 underline">
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-blue-500 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © 2025 G-client, All rights reserved
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center hover:text-blue-200 border border-white rounded px-4 py-2 hover:border-blue-200"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
