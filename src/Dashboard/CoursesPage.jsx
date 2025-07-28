import React, { useState } from 'react';
import { Pencil, Trash2, Search, Plus } from 'lucide-react';

const coursesMock = [
  { name: 'ReactJs', track: 'Software Development', date: 'Jan 6, 2022', icon: 'reactjs.png' },
  { name: 'NodeJs', track: 'Software Development', date: 'Jan 6, 2022', icon: 'nodejs.png' },
  { name: 'MongoDB', track: 'Software Development', date: 'Jan 6, 2022', icon: 'mongodb.png' },
  { name: 'GCP', track: 'Cloud Computing', date: 'Jan 5, 2022', icon: 'gcp.png' },
  { name: 'Python', track: 'Data Science', date: 'Jan 5, 2022', icon: 'python.png' },
  { name: 'PowerBI', track: 'Data Science', date: 'Jan 5, 2022', icon: 'powerbi.png' },
  { name: 'Azure', track: 'Cloud Computing', date: 'Jan 4, 2022', icon: 'azure.png' },
  { name: 'AWS', track: 'Cloud Computing', date: 'Jan 5, 2022', icon: 'aws.png' },
];

const CoursesPage = () => {
  const [search, setSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(coursesMock.length / itemsPerPage);

  const filteredCourses = coursesMock.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedCourses = filteredCourses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Manage Courses</h1>
            <p className="text-sm text-gray-500 mt-1">Filter, sort, and access detailed courses</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        {/* Search + Add Course */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search course"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button className="bg-[#01589A] hover:bg-[#116EB5] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" />
            Add course
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-[#EEF9FF] overflow-hidden">
          <table className="w-full">
            <thead className="bg-white">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">Courses</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">Tracks</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">Date Joined</th>
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
                        src={`/icons/${course.icon}`}
                        alt={course.name}
                        className="w-8 h-8 object-cover rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-900">{course.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{course.track}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{course.date}</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-md transition-colors">
                        <Pencil className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
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
              activePage === 1
                ? 'text-gray-400 cursor-not-allowed bg-gray-50'
                : 'text-[#1A1A2C] hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex gap-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors border ${
                  page === activePage
                    ? 'bg-[#0056A1] text-white'
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
              activePage === totalPages
                ? 'text-gray-400 cursor-not-allowed bg-gray-50'
                : 'text-[#1A1A2C] hover:bg-gray-100'
            }`}
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
