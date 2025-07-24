import React from 'react';
import { Search, Plus, Calendar, User } from 'lucide-react';

const tracks = [
  {
    title: 'Software Engineering',
    price: '$400',
    duration: '12 weeks',
    instructor: 'Benjamin',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'NodeJs', color: 'bg-green-100 text-green-600' },
      { label: 'React.Js', color: 'bg-purple-100 text-purple-600' },
    ],
    description: 'Unlock your potential with comprehensive training in ....',
  },
  {
    title: 'Cloud Computing',
    price: '$350',
    duration: '12 weeks',
    instructor: 'John',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'Azure', color: 'bg-blue-100 text-blue-600' },
      { label: 'AWS', color: 'bg-sky-100 text-sky-600' },
    ],
    description: 'Unlock your potential with comprehensive training in ....',
  },
  {
    title: 'Data Science',
    price: '$400',
    duration: '12 weeks',
    instructor: 'Smith',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'PowerBI', color: 'bg-pink-100 text-pink-600' },
      { label: 'Python', color: 'bg-blue-100 text-blue-600' },
    ],
    description: 'Unlock your potential with comprehensive training in ....',
  },
  {
    title: 'UI/UX',
    price: '$250',
    duration: '8 weeks',
    instructor: 'Doe',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'Figma', color: 'bg-orange-100 text-orange-500' },
      { label: 'Sketch', color: 'bg-pink-100 text-pink-500' },
    ],
    description: 'Unlock your potential with comprehensive training in ....',
  },
];

const TracksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold mb-1">Manage Tracks</h1>
        <p className="text-gray-500 text-sm">Filter, sort, and access detailed tracks</p>
      </div>
      {/* Search and Add Button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mt-6">
        <div className="relative w-full max-w-xs">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search Track"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white text-gray-700 placeholder-gray-400 shadow-sm"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#0866B3] hover:bg-[#01589A] text-white font-semibold px-6 py-2 rounded-lg shadow transition-all ml-auto md:ml-0">
          <Plus className="w-5 h-5" />
          Add Track
        </button>
      </div>
      {/* Track Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {tracks.map((track) => (
          <div
            key={track.title}
            className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={track.image}
                alt={track.title}
                className="w-full h-32 object-cover rounded-t-2xl"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-bold shadow text-gray-700">
                {track.price}
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="font-semibold text-lg text-gray-900 mb-1">{track.title}</div>
              <div className="text-gray-500 text-sm mb-2">{track.description}</div>
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                {track.duration}
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <User className="w-4 h-4 mr-1" />
                {track.instructor}
              </div>
              <div className="mt-auto flex gap-2 flex-wrap">
                {track.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TracksPage; 