import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import Signup from './Onboarding/Signup'
import Login from './Onboarding/Login'
import OtpVerification from './Onboarding/OtpVerification'
import ResetPassword from './Onboarding/ResetPassword'
import CreateNewPassword from './Onboarding/CreateNewPassword'
import Dashboard from './Dashboard/Dashboard'
import TracksPage from './Dashboard/TracksPage'
import DetailedTrackPage from './Dashboard/DetailedTrackPage'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password/:token" element={<CreateNewPassword />} />

          {/* Dashboard Layout for all dashboard pages */}
          <Route element={<DashboardLayout><Outlet /></DashboardLayout>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/tracks/:trackId" element={<DetailedTrackPage />} />
            {/* Add more dashboard routes here */}
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App