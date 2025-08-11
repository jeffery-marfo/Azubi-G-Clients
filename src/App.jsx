// import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
// import './App.css'
// import Signup from './Onboarding/AdminOnboarding/Signup'
// import Login from './Onboarding/AdminOnboarding/Login'
// import OtpVerification from './Onboarding/AdminOnboarding/OtpVerification'
// import ResetPassword from './Onboarding/AdminOnboarding/ResetPassword'
// import CreateNewPassword from './Onboarding/AdminOnboarding/CreateNewPassword'
// import Dashboard from './Dashboard/Dashboard'
// import TracksPage from './Dashboard/TracksPage'
// import DetailedTrackPage from './Dashboard/DetailedTrackPage'
// import CoursesPage from './Dashboard/CoursesPage'   
// import DashboardLayout from './layouts/DashboardLayout'
// import Invoices from './Dashboard/Invoices'
// import LearnersPage from './Dashboard/Learners'
// import ManageProfile from './components/ManageProfile'
// import RootLayout from './layouts/RootLayout'
// import LearnerLogin from './Onboarding/LearnerOnboarding/LearnerLogin'
// import LearnerSignUp from './Onboarding/LearnerOnboarding/LearnerSignUp'
// import LearnerHomepage from './LearnerPortal/LearnerHomepage'

// // Layout wrapper component that uses DashboardLayout correctly
// const DashboardLayoutWrapper = () => {
//   return (
//     <DashboardLayout>
//       <Outlet />
//     </DashboardLayout>
//   );
// };


// const RootLayoutWrapper = () => (
//   <RootLayout>
//     <Outlet />
//   </RootLayout>
// );

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           {/* Auth routes - no layout */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/otp-verification" element={<OtpVerification />} />
//           <Route path="/reset-password" element={<ResetPassword />} />
//           <Route path="/reset-password/:token" element={<CreateNewPassword />} />

//           {/* Dashboard Layout for all dashboard pages */}
//           <Route element={<DashboardLayoutWrapper />}>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/tracks" element={<TracksPage />} />
//             <Route path="/tracks/:trackId" element={<DetailedTrackPage />} />
//             <Route path="/courses" element={<CoursesPage />} />
//             <Route path="/invoices" element={<Invoices />} />
//             <Route path="/learners" element={<LearnersPage />} />
//             <Route path="/manage-profile" element={<ManageProfile />} />
//           </Route>

//           {/* Default redirect */}
//           <Route path="/" element={<Navigate to="/login" replace />} />

//           <Route path="/LeanerLogin" element={<LearnerLogin />} />
//           <Route path="/LeanerSignUp" element={<LearnerSignUp />} />

//           <Route element={<RootLayoutWrapper />}>
//             <Route path="/learner-homepage" element={<LearnerHomepage />} />
//           </Route>
          
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import './App.css';

// Admin Onboarding
import Signup from './Onboarding/AdminOnboarding/Signup';
import Login from './Onboarding/AdminOnboarding/Login';
import OtpVerification from './Onboarding/AdminOnboarding/OtpVerification';
import ResetPassword from './Onboarding/AdminOnboarding/ResetPassword';
import CreateNewPassword from './Onboarding/AdminOnboarding/CreateNewPassword';

// Admin Dashboard
import Dashboard from './Dashboard/Dashboard';
import TracksPage from './Dashboard/TracksPage';
import DetailedTrackPage from './Dashboard/DetailedTrackPage';
import CoursesPage from './Dashboard/CoursesPage';
import DashboardLayout from './layouts/DashboardLayout';
import Invoices from './Dashboard/Invoices';
import LearnersPage from './Dashboard/Learners';
import ManageProfile from './components/ManageProfile';

// Learner
import RootLayout from './layouts/RootLayout';
import LearnerLogin from './Onboarding/LearnerOnboarding/LearnerLogin';
import LearnerSignUp from './Onboarding/LearnerOnboarding/LearnerSignUp';
import LearnerHomepage from './LearnerPortal/LearnerHomepage';
import LearnerOTPVerification from './Onboarding/LearnerOnboarding/LearnerOTPVerification';
import LearnerForgotPassword from './Onboarding/LearnerOnboarding/LearnerForgotPassword';
import LearnerResetPassword from './Onboarding/LearnerOnboarding/LearnerResetPassword';

// Layout wrapper for admin dashboard
const DashboardLayoutWrapper = () => (
  <DashboardLayout>
    <Outlet />
  </DashboardLayout>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* ================= Admin Auth ================= */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password/:token" element={<CreateNewPassword />} />

          {/* ================= Admin Dashboard ================= */}
          <Route element={<DashboardLayoutWrapper />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/tracks/:trackId" element={<DetailedTrackPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/learners" element={<LearnersPage />} />
            <Route path="/manage-profile" element={<ManageProfile />} />
          </Route>

          {/* ================= Learner Pages with Navbar & Footer ================= */}
          <Route element={<RootLayout />}>
            <Route path="/learner/login" element={<LearnerLogin />} />
            <Route path="/learner/signup" element={<LearnerSignUp />} />
            <Route path="/learner/learner-otp-verification" element={<LearnerOTPVerification />} />
            <Route path="/learner/learner-forgot-password" element={<LearnerForgotPassword />} />
            <Route path="/learner/learner-reset-password" element={<LearnerResetPassword />} />
            <Route path="/learner/homepage" element={<LearnerHomepage />} />
          </Route>

          {/* ================= Default Redirect ================= */}
          <Route path="/" element={<Navigate to="/login" replace />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
