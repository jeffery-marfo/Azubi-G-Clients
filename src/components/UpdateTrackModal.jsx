import React, { useState } from 'react';

const UpdateTrackModal = ({ track, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    title: track.title || '',
    price: track.price || '',
    duration: track.duration || '',
    instructor: track.instructor || '',
    image: null,
    description: track.description || '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); // pass updated data
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
        <h2 className="text-center text-xl font-semibold mb-6">Update Track</h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Track name */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Track name</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Duration</label>
            <input
              type="text"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Instructor */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Instructor</label>
            <input
              type="text"
              name="instructor"
              value={form.instructor}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Picture */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Picture</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 file:mr-3 file:py-1 file:px-4 file:rounded file:border-0 file:bg-gray-100 file:text-sm file:text-gray-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0866B3] hover:bg-[#01589A] text-white py-2 rounded font-semibold transition"
          >
            Create Track
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTrackModal;
