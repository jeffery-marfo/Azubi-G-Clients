// import React, { useState } from 'react';
// import {Search, Eye } from 'lucide-react';

// const initialLearners = [
//   { 
//     id: 1,
//     learner: 'James Anderson', 
//     email: 'olivia@mastery.pro', 
//     dateJoined: 'Jan 6, 2022', 
//     amount: '$300',
//     gender: 'Male',
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
//   },
//   { 
//     id: 2,
//     learner: 'Michael Johnson', 
//     email: 'phoenix@mastery.pro', 
//     dateJoined: 'Jan 6, 2022', 
//     amount: '$250',
//     gender: 'Male',
//     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format'
//   },
//   { 
//     id: 3,
//     learner: 'David Brown', 
//     email: 'lana@mastery.pro', 
//     dateJoined: 'Jan 6, 2022', 
//     amount: '$150',
//     gender: 'Male',
//     avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format'
//   },
//   { 
//     id: 4,
//     learner: 'Jason Wilson', 
//     email: 'devon@mastery.pro', 
//     dateJoined: 'Jan 5, 2022', 
//     amount: '$300',
//     gender: 'Male',
//     avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face&auto=format'
//   },
//   { 
//     id: 5,
//     learner: 'Mark Davis', 
//     email: 'candice@mastery.pro', 
//     dateJoined: 'Jan 5, 2022', 
//     amount: '$250',
//     gender: 'Male',
//     avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face&auto=format'
//   },
//   { 
//     id: 6,
//     learner: 'Kevin Taylor', 
//     email: 'natali@mastery.pro', 
//     dateJoined: 'Jan 5, 2022', 
//     amount: '$300',
//     gender: 'Male',
//     avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face&auto=format'
//   },
//   { 
//     id: 7,
//     learner: 'Brian Miller', 
//     email: 'drew@mastery.pro', 
//     dateJoined: 'Jan 4, 2022', 
//     amount: '$170',
//     gender: 'Male',
//     avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face&auto=format'
//   },
//   { 
//     id: 8,
//     learner: 'Orlando Diggs', 
//     email: 'orlando@mastery.pro', 
//     dateJoined: 'Jan 5, 2022', 
//     amount: '$260',
//     gender: 'Male',
//     avatar: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=40&h=40&fit=crop&crop=face&auto=format'
//   },
// ];

// // Add Learner Modal Component
// const AddLearnerModal = ({ onClose, onAdd }) => {
//   const [formData, setFormData] = useState({
//     learner: '',
//     email: '',
//     dateJoined: '',
//     amount: '',
//     gender: 'Male'
//   });

//   const handleSubmit = (e) => {
//     e?.preventDefault();
//     onAdd(formData);
//     setFormData({
//       learner: '',
//       email: '',
//       dateJoined: '',
//       amount: '',
//       gender: 'Male'
//     });
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 w-96 max-w-md">
//         <h2 className="text-xl font-semibold mb-4">Add New Learner</h2>
//         <div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//             <input
//               type="text"
//               required
//               value={formData.learner}
//               onChange={(e) => setFormData(prev => ({ ...prev, learner: e.target.value }))}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Date Joined</label>
//             <input
//               type="text"
//               required
//               placeholder="e.g., Jan 6, 2022"
//               value={formData.dateJoined}
//               onChange={(e) => setFormData(prev => ({ ...prev, dateJoined: e.target.value }))}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
//             <input
//               type="text"
//               required
//               placeholder="e.g., $300"
//               value={formData.amount}
//               onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
//             <select
//               value={formData.gender}
//               onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>
//           <div className="flex gap-3">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="flex-1 px-4 py-2 bg-[#01589A] text-white rounded-md hover:bg-[#014273]"
//             >
//               Add Learner
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// const LearnersPage = () => {
//   const [learners, setLearners] = useState(initialLearners);
//   const [search, setSearch] = useState('');
//   const [activePage, setActivePage] = useState(1);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [selectedLearner, setSelectedLearner] = useState(null);

//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(learners.length / itemsPerPage);

//   const filteredLearners = learners.filter(learner =>
//     learner.learner.toLowerCase().includes(search.toLowerCase()) ||
//     learner.email.toLowerCase().includes(search.toLowerCase())
//   );

//   const paginatedLearners = filteredLearners.slice(
//     (activePage - 1) * itemsPerPage,
//     activePage * itemsPerPage
//   );

//   const handleDeleteLearner = (id) => {
//     setLearners(prev => prev.filter(learner => learner.id !== id));
//   };

//   const handleAddLearner = (newLearner) => {
//     const learner = {
//       ...newLearner,
//       id: Math.max(...learners.map(l => l.id)) + 1,
//       avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
//     };
//     setLearners(prev => [...prev, learner]);
//     setShowAddModal(false);
//   };

//   const handleUpdateLearner = (updatedLearner) => {
//     setLearners(prev =>
//       prev.map(learner =>
//         learner.id === updatedLearner.id ? updatedLearner : learner
//       )
//     );
//     setShowUpdateModal(false);
//     setSelectedLearner(null);
//   };

//   return (
//     <div className="flex-1 flex flex-col bg-white">
//       {/* Header */}
//       <div className="bg-white px-8 py-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl font-semibold text-gray-900">Manage learners</h1>
//             <p className="text-sm text-gray-500 mt-1">Filter, sort, and access detailed learner profiles</p>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-8">
//         {/* Search + Add */}
//         <div className="flex items-center justify-end mb-6">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search learner"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-lg border border-[#EEF9FF] overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-white">
//               <tr>
//                 <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Learners</th>
//                 <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
//                 <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date Joined</th>
//                 <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                 <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
//                 <th className="text-right py-4 px-6"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedLearners.map((learner, index) => (
//                 <tr
//                   key={learner.id}
//                   className={`${index % 2 === 0 ? 'bg-[#F9FBFC]' : 'bg-white'} border-t border-[#EEF9FF] transition-colors hover:bg-gray-100`}
//                 >
//                   <td className="py-4 px-6">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={learner.avatar}
//                         alt={learner.learner}
//                         className="w-8 h-8 object-cover rounded-full"
//                       />
//                       <span className="text-sm font-medium text-gray-900">{learner.learner}</span>
//                     </div>
//                   </td>
//                   <td className="py-4 px-6 text-sm text-gray-700">{learner.email}</td>
//                   <td className="py-4 px-6 text-sm text-gray-700">{learner.dateJoined}</td>
//                   <td className="py-4 px-6 text-sm font-medium text-gray-900">{learner.amount}</td>
//                   <td className="py-4 px-6 text-sm text-gray-700">{learner.gender}</td>
//                   <td className="py-4 px-6 text-right">
//                     <div className="flex items-center justify-end gap-2">
//                       <button className="p-2 hover:bg-gray-200 rounded-md transition-colors">
//                         <Eye className="w-4 h-4 text-gray-500" />
//                       </button>
                     
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between mt-6 px-2">
//           <button
//             onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
//             disabled={activePage === 1}
//             className={`flex items-center gap-2 px-4 py-2 border border-[#EEF9FF] rounded-xl text-sm font-medium transition shadow-sm ${
//               activePage === 1
//                 ? 'text-gray-400 cursor-not-allowed bg-gray-50'
//                 : 'text-[#1A1A2C] hover:bg-gray-100'
//             }`}
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Previous
//           </button>

//           <div className="flex gap-3">
//             {Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setActivePage(page)}
//                 className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors border ${
//                   page === activePage
//                     ? 'bg-[#0056A1] text-white border-[#0056A1]'
//                     : 'border-[#EEF9FF] text-[#1A1A2C] hover:bg-gray-100'
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
//             disabled={activePage === totalPages}
//             className={`flex items-center gap-2 px-4 py-2 border border-[#EEF9FF] rounded-xl text-sm font-medium transition shadow-sm ${
//               activePage === totalPages
//                 ? 'text-gray-400 cursor-not-allowed bg-gray-50'
//                 : 'text-[#1A1A2C] hover:bg-gray-100'
//             }`}
//           >
//             Next
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Add Learner Modal */}
//       {showAddModal && (
//         <AddLearnerModal 
//           onClose={() => setShowAddModal(false)} 
//           onAdd={handleAddLearner} 
//         />
//       )}

//       {/* Update Learner Modal */}
//       {showUpdateModal && selectedLearner && (
//         <UpdateLearnerModal 
//           learner={selectedLearner}
//           onClose={() => {
//             setShowUpdateModal(false);
//             setSelectedLearner(null);
//           }} 
//           onUpdate={handleUpdateLearner} 
//         />
//       )}
//     </div>
//   );
// };

// export default LearnersPage;

import React, { useState, useMemo } from 'react';
import { Search, Eye } from 'lucide-react';
import LearnerModal from '../components/LearnerModal';

const initialLearners = [
  {
    id: 1,
    learner: 'James Anderson',
    email: 'james@mastery.pro',
    dateJoined: 'Jan 6, 2022',
    amount: '$300',
    gender: 'Male',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: 2,
    learner: 'Sarah Johnson',
    email: 'sarah@mastery.pro',
    dateJoined: 'Jan 5, 2022',
    amount: '$250',
    gender: 'Female',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: 3,
    learner: 'Michael Brown',
    email: 'michael@mastery.pro',
    dateJoined: 'Jan 7, 2022',
    amount: '$350',
    gender: 'Male',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: 4,
    learner: 'Emily Davis',
    email: 'emily@mastery.pro',
    dateJoined: 'Jan 5, 2022',
    amount: '$275',
    gender: 'Female',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: 5,
    learner: 'David Wilson',
    email: 'david@mastery.pro',
    dateJoined: 'Jan 8, 2022',
    amount: '$400',
    gender: 'Male',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: 6,
    learner: 'Jennifer Lee',
    email: 'jennifer@mastery.pro',
    dateJoined: 'Jan 6, 2022',
    amount: '$320',
    gender: 'Female',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: 7,
    learner: 'Robert Taylor',
    email: 'robert@mastery.pro',
    dateJoined: 'Jan 9, 2022',
    amount: '$280',
    gender: 'Male',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face&auto=format'
  },
  {
    id: 8,
    learner: 'Jessica Martinez',
    email: 'jessica@mastery.pro',
    dateJoined: 'Jan 7, 2022',
    amount: '$310',
    gender: 'Female',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face&auto=format'
  }
];

const LearnersPage = () => {
  const [learners] = useState(initialLearners);
  const [search, setSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [selectedLearner, setSelectedLearner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 4;

  const handleOpenModal = (learner) => {
    setSelectedLearner(learner);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedLearner(null);
    setIsModalOpen(false);
  };

  const filteredLearners = useMemo(() =>
    learners.filter(learner =>
      learner.learner.toLowerCase().includes(search.toLowerCase()) ||
      learner.email.toLowerCase().includes(search.toLowerCase())
    ), [learners, search]);

  const totalPages = Math.ceil(filteredLearners.length / itemsPerPage);
  const paginatedLearners = useMemo(() =>
    filteredLearners.slice(
      (activePage - 1) * itemsPerPage,
      activePage * itemsPerPage
    ), [filteredLearners, activePage, itemsPerPage]);

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="bg-white px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900">Manage learners</h1>
        <p className="text-sm text-gray-500 mt-1">Filter, sort, and access detailed learner profiles</p>
      </div>

      <div className="flex-1 p-8">
        <div className="flex justify-end mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search learner"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#EEF9FF] overflow-hidden">
          <table className="w-full">
            <thead className="bg-white">
              <tr>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Learners</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date Joined</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="text-right py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedLearners.map((learner, index) => (
                <tr
                  key={learner.id}
                  onClick={() => handleOpenModal(learner)}
                  className={`${index % 2 === 0 ? 'bg-[#F9FBFC]' : 'bg-white'} border-t border-[#EEF9FF] transition-colors hover:bg-gray-100 cursor-pointer`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={learner.avatar}
                        alt={learner.learner}
                        className="w-8 h-8 object-cover rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-900">{learner.learner}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">{learner.email}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{learner.dateJoined}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{learner.amount}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{learner.gender}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent row click
                        handleOpenModal(learner);
                      }}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors"
                      aria-label={`View details for ${learner.learner}`}
                    >
                      <Eye className="w-4 h-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 px-2">
          <button
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
            disabled={activePage === 1}
            className={`flex items-center gap-2 px-4 py-2 border border-[#EEF9FF] rounded-xl text-sm font-medium transition shadow-sm ${
              activePage === 1 ? 'text-gray-400 cursor-not-allowed bg-gray-50' : 'text-[#1A1A2C] hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex gap-3">
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
            className={`flex items-center gap-2 px-4 py-2 border border-[#EEF9FF] rounded-xl text-sm font-medium transition shadow-sm ${
              activePage === totalPages ? 'text-gray-400 cursor-not-allowed bg-gray-50' : 'text-[#1A1A2C] hover:bg-gray-100'
            }`}
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <LearnerModal learner={selectedLearner} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default LearnersPage;

