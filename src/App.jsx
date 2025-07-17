import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Signup from './Onboarding/Signup'
import Login from './Onboarding/Login'
import OtpVerification from './Onboarding/OtpVerification'
import ResetPassword from './Onboarding/ResetPassword'
import CreateNewPassword from './Onboarding/CreateNewPassword'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App