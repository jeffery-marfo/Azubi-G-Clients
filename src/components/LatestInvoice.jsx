import React from 'react';

// Sample invoice data with realistic profile images
const invoiceData = [
  { 
    id: 1,
    name: 'James Anderson', 
    amount: '$320',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  { 
    id: 2,
    name: 'Michael Johnson', 
    amount: '$210',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  { 
    id: 3,
    name: 'David Brown', 
    amount: '$315',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  { 
    id: 4,
    name: 'Orlando Diggs', 
    amount: '$250',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face'
  }
];

const LatestInvoiceCard = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow w-full h-full">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Latest Invoice</h3>
      <div className="border-b border-gray-200 mb-6" />
      <div>
        {/* Header Row */}
        <div className="flex justify-between items-center px-4 pb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Name</span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Amount</span>
        </div>
        {/* Invoice Items */}
        <div>
          {invoiceData.map((invoice, idx) => (
            <div
              key={invoice.id}
              className={`flex justify-between items-center px-4 py-5 ${idx % 2 === 0 ? 'bg-gray-50' : ''} rounded-xl`}
            >
              <div className="flex items-center gap-4">
                <img 
                  src={invoice.avatar} 
                  alt={invoice.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-base font-medium text-gray-900">{invoice.name}</span>
              </div>
              <span className="text-base font-semibold text-gray-900">{invoice.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestInvoiceCard; 