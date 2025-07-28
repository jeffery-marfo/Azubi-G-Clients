import React from 'react';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }) => (
  <div className="min-h-screen bg-white">
    <Sidebar />
    <main className="ml-60 p-8">
      {children}
    </main>
  </div>
);

export default DashboardLayout; 