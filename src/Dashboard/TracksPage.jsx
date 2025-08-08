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
    description: 'Comprehensive training in modern software development with hands-on projects and industry best practices.',
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
    description: 'Master cloud computing with hands-on experience in major cloud platforms and deployment strategies.',
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
    description: 'Dive into data science with Python and machine learning algorithms to extract insights from complex datasets.',
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
    description: 'Learn user-centered design principles and create beautiful interfaces that users love to interact with.',
  },
];

const TracksPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter tracks based on search term
  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.tags.some(tag => tag.label.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="responsive-title text-gray-900 mb-2">Manage Tracks</h1>
        <p className="text-gray-500 text-sm md:text-base">
          Filter, sort, and access detailed tracks
        </p>
      </div>

      {/* Search and Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          <input
            type="text"
            placeholder="Search Track"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-400 shadow-sm transition-all"
          />
        </div>
        <button
          className="flex items-center justify-center gap-2 bg-[#0866B3] hover:bg-[#01589A] text-white font-semibold px-4 md:px-6 py-2 rounded-lg shadow transition-all whitespace-nowrap"
          onClick={() => setShowModal(true)}
        >
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base">Add Track</span>
        </button>
      </div>

      {/* Track Cards Grid */}
      <div className="tracks-grid">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track) => (
            <Link 
              to={`/tracks/${track.id}`}
              key={track.id}
              className="block h-full group"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02] group-hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-36 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-bold shadow-sm text-gray-700">
                    {track.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 md:p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-2 group-hover:text-[#0866B3] transition-colors">
                    {track.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Track Details */}
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center text-gray-500 text-xs md:text-sm">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                      <span>{track.duration}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-xs md:text-sm mb-3">
                      <User className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                      <span>{track.instructor}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {track.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium transition-all ${tag.color} hover:opacity-80`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          // No Results State
          <div className="col-span-full flex flex-col items-center justify-center py-12 md:py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
              No tracks found
            </h3>
            <p className="text-gray-500 text-sm md:text-base text-center max-w-md">
              Try adjusting your search terms or browse all available tracks.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-[#0866B3] hover:text-[#01589A] text-sm md:text-base font-medium transition-colors"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && <AddTrackModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default TracksPage;