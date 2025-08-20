import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react';
import illustration from "../../assets/images/illustration.png";
import Google from "../../assets/images/Google.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { apiLogin } from '../../services/auth'; // Adjust path as needed

function LearnerLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // Handle success message from OTP verification or other pages
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Pre-fill email if provided
      if (location.state?.email) {
        setFormData(prev => ({ ...prev, email: location.state.email }));
      }
      // Clear message after 5 seconds
      const timer = setTimeout(() => setSuccessMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear API error when user makes changes
    if (apiError) {
      setApiError('');
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setApiError('');
    setSuccessMessage('');
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await apiLogin({
        email: formData.email.trim().toLowerCase(),
        password: formData.password
      });

      console.log('Login successful:', response.data);
      
      // Store authentication data
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }
      
      if (response.data.user) {
        localStorage.setItem('userData', JSON.stringify(response.data.user));
      }

      // Show success message briefly
      setSuccessMessage('Login successful! Redirecting...');
      
      // Redirect to dashboard/homepage
      setTimeout(() => {
        navigate('/learner/homepage', { replace: true });
        // Force navbar to update by triggering a page reload or state update
        window.location.reload(); // Simple approach, or use context/state management
      }, 1000);

    } catch (error) {
      console.error('Login error:', error);
      
      if (error.response?.data?.message) {
        setApiError(error.response.data.message);
      } else if (error.response?.status === 401) {
        setApiError('Invalid email or password. Please try again.');
      } else if (error.response?.status === 403) {
        setApiError('Account not verified. Please check your email for verification link.');
      } else if (error.response?.status === 404) {
        setApiError('No account found with this email address.');
      } else if (error.message === 'Network Error') {
        setApiError('Network error. Please check your internet connection.');
      } else {
        setApiError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
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

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Log in to continue your
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              learning journey
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm text-center">
                {successMessage}
              </div>
            )}

            {/* API Error Message */}
            {apiError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm text-center">
                {apiError}
              </div>
            )}

            {/* Google Login Button */}
            <button 
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <img 
                src={Google} 
                alt="Google logo" 
                className="w-5 h-5 mr-3"
              />
              Log in using Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">or</span>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  disabled={loading}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className={`w-full pl-12 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  }`}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div className="text-left">
              <Link to="/learner/learner-forgot-password" className="text-blue-600 hover:text-blue-500 text-sm">
                Forgot password ?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Logging in...
                </>
              ) : (
                <>
                  Login
                  <span className="ml-2">→</span>
                </>
              )}
            </button>
          </form>

          <div className="text-center">
            <span className="text-gray-600">Need to create an account ? </span>
            <Link to="/learner/signup" className="text-blue-600 hover:text-blue-500 font-medium">
              signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnerLogin;