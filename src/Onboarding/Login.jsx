// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import bgImage from '../assets/images/SignUpBG.png';
import { apiLogin } from '../services/auth';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await apiLogin({ email: form.email, password: form.password });
      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        setError('Invalid response from server.');
      }
    } catch (err) {
      const res = err?.response?.data;
      const message = res?.errors ? Object.values(res.errors).flat().join(' ') : res?.message;
      setError(message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0" style={{ backgroundColor: '#D9D9D9', opacity: 0.3, zIndex: 1 }} />
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
        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
          </div>
          <div className="flex justify-start mb-2">
            <Link to="/reset-password" className="text-xs text-blue-700 hover:underline">forgot password?</Link>
          </div>
          {error && <div className="text-red-600 text-sm mb-1">{error}</div>}
          <button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md py-2 mt-2 transition-all duration-200 transform hover:scale-105 active:scale-95" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
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
