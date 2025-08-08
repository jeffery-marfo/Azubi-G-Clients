import React from 'react';
import StatsCards from '../components/StatsCards';
import Tracks from '../components/Tracks';
import RevenueChart from '../components/RevenueChart';
import LatestInvoice from '../components/LatestInvoice';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="responsive-title mb-2">
          Welcome Admin <span role="img" aria-label="wave">👋</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Track activity, trends, and popular destinations in real time
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-6 md:mb-8">
        <StatsCards />
      </div>

      {/* Tracks Section */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Tracks</h2>
        <Tracks />
      </div>

      {/* Revenue and Invoice Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="w-full">
          <RevenueChart />
        </div>
        <div className="w-full">
          <LatestInvoice />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;