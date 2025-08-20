
// auth.js
import { apiClient } from './config';

// Admin Auth
export const adminSignUp = async (payload) => {
  return apiClient.post('/auth/signup/admin', payload);
};

// Learner Auth
export const learnerSignUp = async (payload) => {
  return apiClient.post('/auth/signup/learner', payload);
};

// General Auth (works for both admin and learner)
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