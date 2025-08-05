import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const UpdateInvoiceModal = ({ invoice, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    id: invoice.id,
    learner: invoice.learner,
    email: invoice.email,
    amount: invoice.amount.replace('$', ''),
    dueDate: '2022-07-06', // Default date from your image
    status: invoice.status,
    paymentDetails: '',
    avatar: invoice.avatar,
    dateJoined: invoice.dateJoined
  });

  const learners = [
    'James Anderson',
    'Michael Johnson', 
    'David Brown',
    'Jason Wilson',
    'Mark Davis',
    'Kevin Taylor',
    'Brian Miller',
    'Orlando Diggs'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      ...formData,
      amount: formData.amount.startsWith('$') ? formData.amount : `$${formData.amount}`
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#E6E6E6]/50 flex items-start justify-center pt-8 pb-8 px-4 overflow-y-auto">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-md my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 text-xl font-bold hover:text-black"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6">Update invoice</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select learner */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Select learner</label>
            <div className="relative">
              <select
                value={formData.learner}
                onChange={(e) => handleInputChange('learner', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 appearance-none bg-white"
                required
              >
                {learners.map((learner) => (
                  <option key={learner} value={learner}>{learner}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Enter amount */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Enter amount</label>
            <input
              type="text"
              placeholder="300"
              value={formData.amount}
              onChange={(e) => handleInputChange('amount', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Due date */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Due date</label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => handleInputChange('dueDate', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Status</label>
            <div className="relative">
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 appearance-none bg-white"
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Payment details */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Payment details</label>
            <textarea
              placeholder="Enter payment details or notes"
              rows={3}
              value={formData.paymentDetails}
              onChange={(e) => handleInputChange('paymentDetails', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0571A6] hover:bg-[#01589A] text-white py-2 rounded font-semibold transition"
          >
            Update invoice
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInvoiceModal;