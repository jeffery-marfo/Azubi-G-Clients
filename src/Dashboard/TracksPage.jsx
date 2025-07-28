import React, { useState } from 'react';
import { Search, Plus, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddTrackModal from '../components/AddTrackModal';

const tracks = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    price: '$400',
    duration: '12 weeks',
    instructor: 'Benjamin',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'NodeJs', color: 'bg-green-100 text-green-600' },
      { label: 'React.Js', color: 'bg-purple-100 text-purple-600' },
    ],
    description: 'Comprehensive training in modern software development...',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    price: '$350',
    duration: '12 weeks',
    instructor: 'John',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'Azure', color: 'bg-blue-100 text-blue-600' },
      { label: 'AWS', color: 'bg-sky-100 text-sky-600' },
    ],
    description: 'Master cloud computing with hands-on experience...',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    price: '$400',
    duration: '12 weeks',
    instructor: 'Smith',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'PowerBI', color: 'bg-pink-100 text-pink-600' },
      { label: 'Python', color: 'bg-blue-100 text-blue-600' },
    ],
    description: 'Dive into data science with Python and machine learning...',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX',
    price: '$250',
    duration: '8 weeks',
    instructor: 'Doe',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'Figma', color: 'bg-orange-100 text-orange-500' },
      { label: 'Sketch', color: 'bg-pink-100 text-pink-500' },
    ],
    description: 'Learn user-centered design principles and create beautiful interfaces...',
  },
];

const TracksPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white p-8">
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
        <button
          className="flex items-center gap-2 bg-[#0866B3] hover:bg-[#01589A] text-white font-semibold px-6 py-2 rounded-lg shadow transition-all ml-auto md:ml-0"
          onClick={() => setShowModal(true)}
        >
          <Plus className="w-5 h-5" />
          Add Track
        </button>
      </div>

      {/* Modal */}
      {showModal && <AddTrackModal onClose={() => setShowModal(false)} />}

      {/* Track Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tracks.map((track) => (
          <Link 
            to={`/tracks/${track.id}`}
            key={track.id}
            className="block h-full hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md">
              <div className="relative">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-bold shadow text-gray-700">
                  {track.price}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{track.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{track.description}</p>
                <div className="mt-auto">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{track.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>{track.instructor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {track.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TracksPage;
