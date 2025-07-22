import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import K from '../constants';
import logo from '../assets/images/Logo.png';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-64 bg-[#0866B3] flex flex-col justify-between py-6 px-4 text-white">
      {/* Logo Section */}
      <div>
        <div className="flex flex-col items-center mb-10">
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center w-44 h-16 mb-2">
            <img src={logo} alt="Logo" className="h-7 w-auto mb-1" />
            <span className="text-[#0866B3] font-bold text-lg leading-none">CLient</span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {K.SIDEBAR_LINKS.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors font-medium text-base ${location.pathname === item.path ? 'bg-white text-[#0866B3]' : 'text-white hover:bg-[#0a4e8a]/80'}`}
            >
              <span className="text-xl">{item.icon && <item.icon />}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      {/* User Profile */}
      <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 mb-2">
        <FaUserCircle className="text-3xl text-white bg-[#0866B3] rounded-full" />
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm truncate">Admin 123</div>
          <div className="text-xs text-blue-100 truncate">admin123@gmail.com</div>
        </div>
        <FaSignOutAlt className="text-lg text-white opacity-70 cursor-pointer" title="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;