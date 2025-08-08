import React, { useState } from 'react';
import { Pencil, Trash2, Search, Plus } from 'lucide-react';
import AddInvoiceModal from '../components/AddInvoiceModal';
import UpdateInvoiceModal from '../components/UpdateInvoiceModal';

const initialInvoices = [
  { 
    id: 1,
    learner: 'James Anderson', 
    email: 'olivia@mastery.pro', 
    dateJoined: 'Jan 6, 2022', 
    amount: '$500',
    status: 'Paid',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  { 
    id: 2,
    learner: 'Michael Johnson', 
    email: 'phoenix@mastery.pro', 
    dateJoined: 'Jan 6, 2022', 
    amount: '$250',
    status: 'Paid',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  { 
    id: 3,
    learner: 'David Brown', 
    email: 'lana@mastery.pro', 
    dateJoined: 'Jan 6, 2022', 
    amount: '$150',
    status: 'Pending',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  { 
    id: 4,
    learner: 'Jason Wilson', 
    email: 'devon@mastery.pro', 
    dateJoined: 'Jan 5, 2022', 
    amount: '$300',
    status: 'Paid',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  { 
    id: 5,
    learner: 'Mark Davis', 
    email: 'candice@mastery.pro', 
    dateJoined: 'Jan 5, 2022', 
    amount: '$250',
    status: 'Pending',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  { 
    id: 6,
    learner: 'Kevin Taylor', 
    email: 'natali@mastery.pro', 
    dateJoined: 'Jan 5, 2022', 
    amount: '$400',
    status: 'Paid',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  { 
    id: 7,
    learner: 'Brian Miller', 
    email: 'drew@mastery.pro', 
    dateJoined: 'Jan 4, 2022', 
    amount: '$170',
    status: 'Paid',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  { 
    id: 8,
    learner: 'Orlando Diggs', 
    email: 'orlando@mastery.pro', 
    dateJoined: 'Jan 5, 2022', 
    amount: '$260',
    status: 'Pending',
    avatar: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=40&h=40&fit=crop&crop=face&auto=format'
  },
];

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [search, setSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  const filteredInvoices = invoices.filter(invoice =>
    invoice.learner.toLowerCase().includes(search.toLowerCase()) ||
    invoice.email.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedInvoices = filteredInvoices.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const handleDeleteInvoice = (id) => {
    setInvoices(prev => prev.filter(invoice => invoice.id !== id));
  };

  const handleAddInvoice = (newInvoice) => {
    const invoice = {
      ...newInvoice,
      id: Math.max(...invoices.map(i => i.id)) + 1,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
    };
    setInvoices(prev => [...prev, invoice]);
    setShowAddModal(false);
  };

  const handleUpdateInvoice = (updatedInvoice) => {
    setInvoices(prev =>
      prev.map(invoice =>
        invoice.id === updatedInvoice.id ? updatedInvoice : invoice
      )
    );
    setShowUpdateModal(false);
    setSelectedInvoice(null);
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    if (status === 'Paid') {
      return `${baseClasses} bg-green-100 text-green-800`;
    } else if (status === 'Pending') {
      return `${baseClasses} bg-yellow-100 text-yellow-800`;
    }
    return `${baseClasses} bg-gray-100 text-gray-800`;
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="responsive-title text-gray-900">Manage invoices</h1>
        <p className="text-sm md:text-base text-gray-500 mt-1">
          Filter, sort, and access detailed invoices
        </p>
      </div>

      {/* Search + Add Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search invoice"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-[#01589A] hover:bg-[#014273] text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm font-medium transition-colors whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Add Invoice
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg border border-[#EEF9FF] overflow-hidden mb-6">
        <table className="w-full">
          <thead className="bg-white">
            <tr>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Learners</th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date Joined</th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-right py-4 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedInvoices.map((invoice, index) => (
              <tr
                key={invoice.id}
                className={`${index % 2 === 0 ? 'bg-[#F9FBFC]' : 'bg-white'} border-t border-[#EEF9FF] transition-colors hover:bg-gray-100`}
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={invoice.avatar}
                      alt={invoice.learner}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900">{invoice.learner}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">{invoice.email}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{invoice.dateJoined}</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{invoice.amount}</td>
                <td className="py-4 px-6">
                  <span className={getStatusBadge(invoice.status)}>
                    {invoice.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => {
                        setSelectedInvoice(invoice);
                        setShowUpdateModal(true);
                      }}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <Pencil className="w-4 h-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => handleDeleteInvoice(invoice.id)}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4 mb-6">
        {paginatedInvoices.map((invoice) => (
          <div key={invoice.id} className="bg-white rounded-lg border border-[#EEF9FF] p-4">
            {/* Header with avatar and actions */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={invoice.avatar}
                  alt={invoice.learner}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">{invoice.learner}</h3>
                  <span className={getStatusBadge(invoice.status)}>
                    {invoice.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    setSelectedInvoice(invoice);
                    setShowUpdateModal(true);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Pencil className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => handleDeleteInvoice(invoice.id)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Email:</span>
                <span className="text-gray-900 truncate ml-2">{invoice.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date Joined:</span>
                <span className="text-gray-900">{invoice.dateJoined}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Amount:</span>
                <span className="text-gray-900 font-medium">{invoice.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Pagination */}
      <div className="flex items-center justify-between px-2">
        <button
          onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
          disabled={activePage === 1}
          className={`flex items-center gap-2 px-3 md:px-4 py-2 border border-[#EEF9FF] rounded-xl text-sm font-medium transition shadow-sm ${
            activePage === 1
              ? 'text-gray-400 cursor-not-allowed bg-gray-50'
              : 'text-[#1A1A2C] hover:bg-gray-100'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex gap-2 md:gap-3">
          {Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors border ${
                page === activePage
                  ? 'bg-[#0056A1] text-white border-[#0056A1]'
                  : 'border-[#EEF9FF] text-[#1A1A2C] hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
          disabled={activePage === totalPages}
          className={`flex items-center gap-2 px-3 md:px-4 py-2 border border-[#EEF9FF] rounded-xl text-sm font-medium transition shadow-sm ${
            activePage === totalPages
              ? 'text-gray-400 cursor-not-allowed bg-gray-50'
              : 'text-[#1A1A2C] hover:bg-gray-100'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Add Invoice Modal */}
      {showAddModal && (
        <AddInvoiceModal 
          onClose={() => setShowAddModal(false)} 
          onAdd={handleAddInvoice} 
        />
      )}

      {/* Update Invoice Modal */}
      {showUpdateModal && selectedInvoice && (
        <UpdateInvoiceModal 
          invoice={selectedInvoice}
          onClose={() => {
            setShowUpdateModal(false);
            setSelectedInvoice(null);
          }} 
          onUpdate={handleUpdateInvoice} 
        />
      )}
    </div>
  );
};

export default InvoicesPage;