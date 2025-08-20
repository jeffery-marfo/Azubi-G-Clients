import React, { useState, useEffect, useRef } from "react";
import { Menu, X, LogIn, ChevronDown, User, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const checkAuthStatus = () => {
    // Check if user is logged in (you can modify this based on your auth implementation)
    const token = localStorage.getItem('authToken'); // or however you store auth data
    const user = JSON.parse(localStorage.getItem('userData') || 'null');
    
    if (token && user) {
      setIsAuthenticated(true);
      setUserData(user);
    } else {
      setIsAuthenticated(false);
      setUserData(null);
    }
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUserData(null);
    setIsUserDropdownOpen(false);
    navigate('/learner/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const navLinkClass = (path) =>
    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  const getUserDisplayName = () => {
    if (userData && userData.firstName && userData.lastName) {
      return `${userData.firstName} ${userData.lastName}`;
    }
    return userData?.email || "User";
  };

  return (
    <nav className="bg-transparent relative">
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
              <Link to="/learner/tracks" className={navLinkClass("/learner/tracks")}>
                Tracks
              </Link>
            </div>
          </div>

          {/* Auth Section - Conditional rendering based on authentication */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {!isAuthenticated ? (
              // Show Login and Sign up buttons when not authenticated
              <>
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
              </>
            ) : (
              // Show user dropdown when authenticated
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {userData?.firstName?.charAt(0) || 'U'}
                  </div>
                  <span className="text-sm font-medium">{getUserDisplayName()}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* User Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <Link
                      to="/learner/tracks/portal-dashboard"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setIsUserDropdownOpen(false)}
                    >
                      <User className="w-4 h-4 mr-3" />
                      Portal
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
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
            <Link 
              to="/learner/homepage" 
              className={navLinkClass("/learner/homepage")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/learner/tracks" 
              className={navLinkClass("/learner/tracks")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tracks
            </Link>
            
            {/* Mobile Auth Section */}
            <div className="pt-4 pb-3 border-t border-gray-200 space-y-3">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/learner/login"
                    className="text-blue-600 hover:text-blue-700 px-6 py-3 text-sm font-medium border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Login</span>
                    <LogIn className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/learner/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-between"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Sign up</span>
                    <LogIn className="w-5 h-5" />
                  </Link>
                </>
              ) : (
                <>
                  <div className="px-4 py-2 text-sm font-medium text-gray-700">
                    Welcome, {getUserDisplayName()}
                  </div>
                  <Link
                    to="/learner/tracks/portal-dashboard"
                    className="flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5 mr-3" />
                    Portal
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;