// auth.js
import { apiClient } from './config';

export const adminSignUp = async (payload) => {
  return apiClient.post('/auth/signup/admin', payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post('/auth/login', payload);
};

export const otpVerification = async (payload) => {
  return apiClient.post('/auth/verify-email', payload);
};

export const resendOtp = async (payload) => {
  return apiClient.post('/auth/resend-token', payload);
};

export const forgotPassword = async (payload) => {
  return apiClient.post('/auth/forgot-password', payload);
};

export const resetPassword = async (token, payload) => {
  return apiClient.post(`/auth/reset-password/${token}`, payload);
};
