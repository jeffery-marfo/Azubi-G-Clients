import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import bgImage from '../assets/images/SignUpBG.png';

const Login = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 30% #D9D9D9 overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: '#D9D9D9', opacity: 0.3, zIndex: 1 }} />

      {/* Floating effect backdrop */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
        <div className="bg-blue-500 bg-opacity-10 rounded-2xl w-full max-w-md h-auto mx-4 blur-xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 bg-white bg-opacity-95 rounded-2xl shadow-2xl w-full max-w-md px-8 py-10 mx-4 my-12 flex flex-col items-center transform hover:scale-105 transition-all duration-300 border border-white border-opacity-20">
        <div className="mb-4 flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-8 mb-2" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2">Admin Login</h2>
        <p className="text-gray-500 text-center text-sm mb-6">
          Login to Manage and Access<br />
          the Dashboard Effortlessly.
        </p>
        <form className="w-full flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Email" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="Password" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
          </div>
          <div className="flex justify-start mb-2">
            <Link to="/reset-password" className="text-xs text-blue-700 hover:underline">forgot password?</Link>
          </div>
          <button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md py-2 mt-2 transition-all duration-200 transform hover:scale-105 active:scale-95">Login</button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-700">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-700 font-medium hover:underline">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 