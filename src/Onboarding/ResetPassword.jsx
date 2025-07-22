
// ResetPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import bgImage from '../assets/images/SignUpBG.png';
import { forgotPassword } from '../services/auth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await forgotPassword({ email });
      setSuccess('A reset link has been sent to your email.');
    } catch (err) {
      const res = err?.response?.data;
      const message = res?.errors ? Object.values(res.errors).flat().join(' ') : res?.message;
      setError(message || 'Request failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-contain bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: '#D9D9D9', opacity: 0.3, zIndex: 1 }} />
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
        <div className="bg-blue-500 bg-opacity-10 rounded-2xl w-full max-w-md h-auto mx-4 blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 bg-white bg-opacity-95 rounded-2xl shadow-2xl w-full max-w-md px-8 py-10 mx-4 my-12 flex flex-col items-center transform hover:scale-105 transition-all duration-300 border border-white border-opacity-20">
        <div className="mb-4 flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-8 mb-2" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2">Admin Reset Password</h2>
        <p className="text-gray-500 text-center text-sm mb-6">
          Enter your email to reset your password
        </p>
        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
          {success && <div className="text-green-600 text-sm mt-1">{success}</div>}
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md py-2 mt-2 transition-all duration-200 transform hover:scale-105 active:scale-95"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Reset Password'}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-700">
          Back to homepage,{' '}
          <Link to="/" className="text-blue-700 font-medium hover:underline">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
