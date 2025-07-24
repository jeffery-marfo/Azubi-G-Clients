import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Sample data for the revenue chart - stacked data
const revenueData = [
  { month: 'Jan', light: 1000, medium: 1500, dark: 1000 },
  { month: 'Feb', light: 1000, medium: 1000, dark: 1000 },
  { month: 'Mar', light: 1000, medium: 2000, dark: 1500 },
  { month: 'Apr', light: 1000, medium: 1000, dark: 1000 },
  { month: 'May', light: 1000, medium: 1000, dark: 1000 },
  { month: 'Jun', light: 1000, medium: 1000, dark: 1000 }
];

// Revenue Chart Component
const RevenueChart = () => (
  <div className="bg-white rounded-2xl p-6 shadow w-full h-full">
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Recent Revenue</h3>
    <div className="border-b border-gray-200 mb-6" />
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueData} barCategoryGap="25%">
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: '#6B7280' }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            domain={[0, 5000]}
            tickFormatter={(value) => `${value/1000}k`}
            ticks={[0, 1000, 2000, 3000, 4000, 5000]}
          />
          <Bar 
            dataKey="light" 
            stackId="revenue"
            fill="#DBEAFE"
            radius={[0, 0, 0, 0]}
          />
          <Bar 
            dataKey="medium" 
            stackId="revenue"
            fill="#93C5FD"
            radius={[0, 0, 0, 0]}
          />
          <Bar 
            dataKey="dark" 
            stackId="revenue"
            fill="#1D4ED8"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default RevenueChart; 