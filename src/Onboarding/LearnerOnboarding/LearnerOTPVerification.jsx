import React, { useState, useRef, useEffect } from 'react';
import { Loader2, ArrowLeft, RefreshCw } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import illustration from "../../assets/images/illustration.png";
import { otpVerification, resendOtp } from '../../services/auth'; // Adjust path as needed

function LearnerOTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef([]);

  const location = useLocation();
  const navigate = useNavigate();

  // Get email from navigation state or localStorage
  const email = location.state?.email || localStorage.getItem('pendingVerificationEmail') || 'your email';
  const welcomeMessage = location.state?.message;

  useEffect(() => {
    // If no email found, redirect to signup
    if (!location.state?.email && !localStorage.getItem('pendingVerificationEmail')) {
      navigate('/learner/signup');
      return;
    }

    // Start resend timer
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer, location.state, navigate]);

  // Show welcome message if coming from signup
  useEffect(() => {
    if (welcomeMessage) {
      setSuccessMessage(welcomeMessage);
      // Clear message after 5 seconds
      const timer = setTimeout(() => setSuccessMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [welcomeMessage]);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Clear errors when user starts typing
      if (error) setError('');

      // Move to next input if current field is filled
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current field is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^[0-9]+$/.test(pastedData)) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length && i < 6; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);
      // Focus on the next empty field or last field
      const nextIndex = Math.min(pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();
      
      // Clear errors
      if (error) setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const otpValue = otp.join('');
    
    // Validate OTP
    if (otpValue.length !== 6) {
      setError('Please enter the complete 6-digit verification code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await otpVerification({
        email: email,
        token: otpValue // or 'otp' if your API expects that field name
      });

      console.log('OTP verification successful:', response.data);
      
      // Clear pending verification email
      localStorage.removeItem('pendingVerificationEmail');
      
      // Store auth data if provided in response
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }
      
      if (response.data.user) {
        localStorage.setItem('userData', JSON.stringify(response.data.user));
      }

      // Show success message
      setSuccessMessage('Email verified successfully! Redirecting...');
      
      // Redirect to login or dashboard based on your flow
      setTimeout(() => {
        navigate('/learner/login', { 
          state: { 
            message: 'Email verified successfully! Please log in to continue.',
            email: email 
          }
        });
      }, 2000);

    } catch (error) {
      console.error('OTP verification error:', error);
      
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.response?.status === 400) {
        setError('Invalid verification code. Please try again.');
      } else if (error.response?.status === 410) {
        setError('Verification code has expired. Please request a new one.');
      } else if (error.message === 'Network Error') {
        setError('Network error. Please check your internet connection.');
      } else {
        setError('Verification failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      await resendOtp({ email: email });
      
      setSuccessMessage('Verification code sent successfully!');
      setResendTimer(60); // Start 60-second cooldown
      
      // Clear OTP fields
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();

    } catch (error) {
      console.error('Resend OTP error:', error);
      
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.response?.status === 429) {
        setError('Too many requests. Please wait before requesting again.');
        setResendTimer(60);
      } else {
        setError('Failed to resend verification code. Please try again.');
      }
    } finally {
      setResendLoading(false);
    }
  };

  const handleBackToSignup = () => {
    localStorage.removeItem('pendingVerificationEmail');
    navigate('/learner/signup');
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

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          {/* Back Button */}
          <button
            onClick={handleBackToSignup}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Signup
          </button>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Verify Your Email
            </h1>
            <p className="text-gray-600 mb-8">
              Enter the 6-digit verification code<br />
              sent to <span className="font-medium text-gray-900">{email}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm text-center">
                {successMessage}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            {/* OTP Input Fields */}
            <div className="flex justify-center space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className={`w-12 h-12 text-center text-lg font-semibold border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 ${
                    error ? 'border-red-300' : 'border-gray-300'
                  }`}
                  maxLength={1}
                  disabled={loading}
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={loading || otp.join('').length !== 6}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Verifying...
                </>
              ) : (
                <>
                  Verify Email
                  <span className="ml-2">→</span>
                </>
              )}
            </button>

            {/* Resend OTP */}
            <div className="text-center space-y-3">
              <p className="text-gray-600 text-sm">
                Didn't receive the code?
              </p>
              
              {resendTimer > 0 ? (
                <p className="text-gray-500 text-sm">
                  Resend code in {resendTimer} seconds
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendLoading}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center mx-auto disabled:opacity-50"
                >
                  {resendLoading ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <RefreshCw size={16} className="mr-2" />
                      Resend Code
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LearnerOTPVerification;