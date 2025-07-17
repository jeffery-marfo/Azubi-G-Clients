import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [email] = useState('admin1234@gmail.com'); // Placeholder email

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add OTP verification logic here
    alert('OTP Verified: ' + otp);
  };

  const handleResend = (e) => {
    e.preventDefault();
    // Add resend OTP logic here
    alert('OTP resent!');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 bg-cover bg-center relative" style={{ backgroundImage: 'url(../assets/images/SignUpBG.png)' }}>
      <div className="absolute inset-0" style={{ backgroundColor: '#D9D9D9', opacity: 0.3, zIndex: 1 }} />
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
        <div className="bg-blue-500 bg-opacity-10 rounded-2xl w-full max-w-md h-auto mx-4 blur-xl animate-pulse"></div>
      </div>
      <div className="relative z-10 bg-white bg-opacity-95 rounded-2xl shadow-2xl w-full max-w-md px-8 py-10 mx-4 my-12 flex flex-col items-center border border-white border-opacity-20">
        <img src={Logo} alt="Logo" className="h-8 mb-4" />
        <h2 className="text-2xl font-semibold text-center mb-2">OTP verification</h2>
        <p className="text-gray-500 text-center text-sm mb-6">
          Enter the verification code we sent to<br />
          <span className="text-blue-700 font-medium">{email}</span>
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <label htmlFor="otp-code" className="block text-sm font-medium text-gray-700 mb-1">Code</label>
          <input
            id="otp-code"
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-center tracking-widest text-lg"
            value={otp}
            onChange={handleChange}
            placeholder="123456"
            maxLength={6}
            required
          />
          <button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md py-2 mt-2 transition-all duration-200 transform hover:scale-105 active:scale-95">Verify</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-700">
          Didn’t you receive the OTP?{' '}
          <button type="button" onClick={handleResend} className="text-blue-700 font-medium hover:underline bg-transparent border-none outline-none cursor-pointer">Resend OTP</button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification; 