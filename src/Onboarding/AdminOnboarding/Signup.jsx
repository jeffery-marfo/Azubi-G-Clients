
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/Logo.png";
import bgImage from "../../assets/images/SignUpBG.png";
import { adminSignUp, resendOtp } from '../../services/auth';
import { Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const payload = { ...form };
      await adminSignUp(payload);
      await resendOtp({ email: form.email });

      setSuccess('Signup successful! Redirecting to verification...');
      setTimeout(() => {
        navigate('/otp-verification', { state: { email: form.email } });
      }, 1500);

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: ''
      });
    } catch (err) {
      const res = err?.response?.data;
      const message = res?.errors
        ? Object.values(res.errors).flat().join(' ')
        : res?.message;
      setError(message || 'Signup failed. Please try again.');
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

      <div className="relative z-10 bg-white bg-opacity-95 rounded-2xl shadow-2xl w-full max-w-md px-8 py-6 mx-4 my-4 flex flex-col items-center transform hover:scale-105 transition-all duration-300 border border-white border-opacity-20">
        <div className="mb-4 flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-8 mb-2" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2">Admin Sign up</h2>
        <p className="text-gray-500 text-center text-sm mb-6">
          Create Your Account to Manage and Access<br />
          the Dashboard Effortlessly.
        </p>
        <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
          {['firstName', 'lastName', 'email', 'contact'].map((field, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={field}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 pr-10"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 pr-10"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </span>
            </div>
          </div>
          {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
          {success && <div className="text-green-600 text-sm mt-1">{success}</div>}
          <button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md py-2 mt-1 transition-all duration-200 transform hover:scale-105 active:scale-95" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        <div className="mt-3 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
