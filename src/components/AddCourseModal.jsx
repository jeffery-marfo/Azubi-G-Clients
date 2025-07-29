import React from 'react';

const AddCourseModal = ({ onClose }) => {
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

        {/* Modal Title */}
        <h2 className="text-center text-xl font-semibold mb-6">Add New Course</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Title</label>
            <input
              type="text"
              placeholder="Course title"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Track Dropdown */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Track</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select track</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Frontend Development">Frontend Development</option>
              {/* Add more options dynamically if needed */}
            </select>
          </div>

          {/* Picture Upload */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Picture</label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded px-3 py-2 file:mr-3 file:py-1 file:px-4 file:rounded file:border-0 file:bg-gray-100 file:text-sm file:text-gray-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
            <textarea
              placeholder="Course description"
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0866B3] hover:bg-[#01589A] text-white py-2 rounded font-semibold transition"
          >
            Create track
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
