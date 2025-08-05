import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AddInvoiceModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    learner: '',
    email: '',
    amount: '',
    dueDate: '',
    status: 'Pending',
    paymentDetails: ''
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
    if (formData.learner && formData.email && formData.amount) {
      onAdd({
        ...formData,
        amount: formData.amount.startsWith('$') ? formData.amount : `$${formData.amount}`,
        dateJoined: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })
      });
    }
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
        <h2 className="text-center text-xl font-semibold mb-6">Add new invoice</h2>

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
                <option value="">Choose a learner</option>
                {learners.map((learner) => (
                  <option key={learner} value={learner}>{learner}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Email address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Enter amount */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Enter amount</label>
            <input
              type="text"
              placeholder="$0.00"
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
            className="w-full bg-[#01589A] hover:bg-[#014273] text-white py-2 rounded font-semibold transition"
          >
            Create invoice
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddInvoiceModal;