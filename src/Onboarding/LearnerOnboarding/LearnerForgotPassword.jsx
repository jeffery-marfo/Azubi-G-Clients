import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import illustration from "../../assets/images/illustration.png";

function LearnerForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Reset password request for:', email);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-12">
        <div className="max-w-md w-full">
          <img 
            src={illustration} 
            alt="Learning journey illustration" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Forgot password
            </h1>
            <p className="text-gray-600 mb-8">
              Enter your email address to reset your password
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Input Field */}
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
                />
              </div>
            </div>

            {/* Reset Password Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              Reset password
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnerForgotPassword;