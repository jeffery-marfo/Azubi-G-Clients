import React from 'react';
import Sidebar from '../components/Sidebar';
import StatsCards from '../components/StatsCards';
import Tracks from '../components/Tracks';
import RevenueChart from '../components/RevenueChart';
import LatestInvoice from '../components/LatestInvoice';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      {/* Main content */}
      <div className=" p-8 overflow-auto min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Welcome Admin <span role="img" aria-label="wave">👋</span></h1>
          <p className="text-gray-500">Track activity, trends, and popular destinations in real time</p>
        </div>
        {/* Stats Cards */}
        <StatsCards />
        {/* Tracks */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Tracks</h2>
          <Tracks />
        </div>
        {/* Revenue and Invoice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevenueChart />
          <LatestInvoice />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 