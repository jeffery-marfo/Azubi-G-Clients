import React, { useState } from 'react';
import { Pencil, Trash2, Search, Plus } from 'lucide-react';
import AddCourseModal from '../components/AddCourseModal';
import UpdateCourseModal from '../components/UpdateCourseModal';
import ReactJs from '../assets/images/ReactJs.png';
import Node from '../assets/images/Node.png';
import MongoDB from '../assets/images/MongoDB.png';
import GCP from '../assets/images/GCP.png';
import Python from '../assets/images/Python.png';
import PowerBi from '../assets/images/PowerBi.png';
import Azure from '../assets/images/Azure.png';
import AWS from '../assets/images/AWS.png';

const initialCourses = [
  { name: 'ReactJs', track: 'Software Development', date: 'Jan 6, 2022', icon: ReactJs},
  { name: 'NodeJs', track: 'Software Development', date: 'Jan 6, 2022', icon: Node },
  { name: 'MongoDB', track: 'Software Development', date: 'Jan 6, 2022', icon: MongoDB },
  { name: 'GCP', track: 'Cloud Computing', date: 'Jan 5, 2022', icon: GCP },
  { name: 'Python', track: 'Data Science', date: 'Jan 5, 2022', icon: Python },
  { name: 'PowerBI', track: 'Data Science', date: 'Jan 5, 2022', icon: PowerBi },
  { name: 'Azure', track: 'Cloud Computing', date: 'Jan 4, 2022', icon: Azure },
  { name: 'AWS', track: 'Cloud Computing', date: 'Jan 5, 2022', icon: AWS },
];

const CoursesPage = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.track.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedCourses = filteredCourses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const handleAddCourse = (newCourse) => {
    setCourses([...courses, { ...newCourse, date: new Date().toDateString() }]);
    setShowAddModal(false);
  };

  const handleUpdateCourse = (updatedCourse) => {
    setCourses(prev =>
      prev.map(course =>
        course.name === updatedCourse.name ? updatedCourse : course
      )
    );
    setShowUpdateModal(false);
    setSelectedCourse(null);
  };

  const handleDeleteCourse = (name) => {
    setCourses(prev => prev.filter(course => course.name !== name));
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="responsive-title text-gray-900">Manage Courses</h1>
        <p className="text-sm md:text-base text-gray-500 mt-1">
          Filter, sort, and access detailed courses
        </p>
      </div>

      {/* Search + Add Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search course"
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
          Add Course
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg border border-[#EEF9FF] overflow-hidden mb-6">
        <table className="w-full">
          <thead className="bg-white">
            <tr>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Tracks</th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date Joined</th>
              <th className="text-right py-4 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedCourses.map((course, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-[#F9FBFC]' : 'bg-white'} border-t border-[#EEF9FF] transition-colors hover:bg-gray-100`}
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.icon}
                      alt={course.name}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900">{course.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.track}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{course.date}</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setSelectedCourse(course);
                        setShowUpdateModal(true);
                      }}
                      className="p-2 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <Pencil className="w-4 h-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.name)}
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
        {paginatedCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg border border-[#EEF9FF] p-4">
            {/* Header with icon and actions */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={course.icon}
                  alt={course.name}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">{course.name}</h3>
                  <span className="text-xs text-gray-500">{course.track}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setShowUpdateModal(true);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Pencil className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => handleDeleteCourse(course.name)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Track:</span>
                <span className="text-gray-900 truncate ml-2">{course.track}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date Joined:</span>
                <span className="text-gray-900">{course.date}</span>
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

      {/* Modals */}
      {showAddModal && (
        <AddCourseModal onClose={() => setShowAddModal(false)} onAdd={handleAddCourse} />
      )}
      {showUpdateModal && selectedCourse && (
        <UpdateCourseModal
          course={selectedCourse}
          onClose={() => {
            setShowUpdateModal(false);
            setSelectedCourse(null);
          }}
          onUpdate={handleUpdateCourse}
        />
      )}
    </div>
  );
};

export default CoursesPage;