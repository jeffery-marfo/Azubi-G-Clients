import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import K from '../constants';
import logo from '../assets/images/Logo.png';
import { FaUserCircle, FaSignOutAlt, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen = true, onClose, isMobile = false }) => {
  const location = useLocation();

  // Handle link clicks on mobile - close sidebar
  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className={`
      fixed top-0 left-0 h-screen w-60 bg-[#01589A] flex flex-col justify-between py-6 px-4 text-white z-50
      transition-transform duration-300 ease-in-out
      ${isMobile 
        ? (isOpen ? 'translate-x-0' : '-translate-x-full')
        : 'translate-x-0'
      }
    `}>
      {/* Mobile Close Button */}
      {isMobile && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors lg:hidden"
          aria-label="Close menu"
        >
          <FaTimes className="text-xl" />
        </button>
      )}

      {/* Logo Section */}
      <div>
        <div className="flex flex-col items-center mb-10">
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center w-54 h-20 mb-2">
            <img src={logo} alt="Logo" className="h-7 w-auto mb-1" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {K.SIDEBAR_LINKS.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium text-base ${
                location.pathname === item.path
                  ? 'bg-white text-[#0866B3]'
                  : 'text-white hover:bg-[#0a4e8a]/80'
              }`}
            >
              <span className="text-xl flex-shrink-0">
                {item.icon && <item.icon />}
              </span>
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* User Profile */}
      <div className="mt-auto">
        <Link
          to="/manage-profile"
          onClick={handleLinkClick}
          className="flex items-center gap-3 bg-white/10 rounded-lg p-3 mb-2 hover:bg-white/20 transition group"
        >
          <FaUserCircle className="text-3xl text-white bg-[#0866B3] rounded-full flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate">Admin 123</div>
            <div className="text-xs text-blue-100 truncate">admin123@gmail.com</div>
          </div>
          <FaSignOutAlt
            className="text-lg text-white opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0"
            title="Logout"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;