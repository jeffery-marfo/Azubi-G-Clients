import React from "react";
import { Eye } from "lucide-react";
import LearnerNavbar from "../LearnerPortal/LearnerNavbar"; // Import your existing navbar

const InvoicesPage = () => {
  const invoices = [
    { id: 1, date: "2025-03-15", amount: "$ 350.00", status: "Paid" },
    { id: 2, date: "2025-03-15", amount: "$ 350.00", status: "Paid" },
    { id: 3, date: "2025-03-15", amount: "$ 350.00", status: "Paid" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Use your existing LearnerNavbar component */}
      <LearnerNavbar />

      {/* Invoices Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Past Invoices</h2>

        <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 font-semibold text-gray-700">#</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Date</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Amount</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-100">
                  <td className="px-4 py-3">{invoice.id}</td>
                  <td className="px-4 py-3">{invoice.date}</td>
                  <td className="px-4 py-3">{invoice.amount}</td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <span className="text-gray-800">{invoice.status}</span>
                    <Eye className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;