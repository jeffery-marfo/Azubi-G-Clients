import React from 'react';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {/* Main content will go here */}
      <div className="flex-1 bg-gray-50"></div>
    </div>
  );
};

export default Dashboard; 