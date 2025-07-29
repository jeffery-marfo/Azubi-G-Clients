import React, { useState, useEffect } from 'react';

const UpdateCourseModal = ({ course, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    track: '',
    date: '',
    icon: '',
  });

  useEffect(() => {
    if (course) {
      setFormData({
        name: course.name || '',
        track: course.track || '',
        date: course.date || '',
        icon: course.icon || '',
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
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
        <h2 className="text-center text-xl font-semibold mb-6">Update Course</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Course name */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Course Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Track */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Track</label>
            <input
              type="text"
              name="track"
              value={formData.track}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Date</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="e.g., Jan 6, 2022"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Icon filename */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Icon Filename</label>
            <input
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              placeholder="e.g., reactjs.png"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0866B3] hover:bg-[#01589A] text-white py-2 rounded font-semibold transition"
          >
            Update Track
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourseModal;
