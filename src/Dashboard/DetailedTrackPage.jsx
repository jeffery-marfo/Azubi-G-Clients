import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Star, Edit, Trash2, DollarSign } from 'lucide-react';
import UpdateTrackModal from '../components/UpdateTrackModal';

const DetailedTrackPage = () => {
  const navigate = useNavigate();
  const { trackId } = useParams();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const trackData = {
    id: trackId,
    title: 'Software Development',
    price: '$400',
    duration: '12 weeks',
    instructor: 'Benjamin',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    tags: [
      { label: 'NodeJs', color: 'bg-green-100 text-green-600' },
      { label: 'React.Js', color: 'bg-purple-100 text-purple-600' },
      { label: 'ReactJs', color: 'bg-blue-100 text-blue-600' },
    ],
    rating: 4.9,
    totalRatings: 50,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    enrolledStudents: 245,
    completionRate: 87,
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating)
          ? 'fill-yellow-400 text-yellow-400'
          : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleUpdateSubmit = (updatedTrack) => {
    console.log('Updated Track:', updatedTrack);
    setShowUpdateModal(false);
  };

  const handleDelete = () => {
    console.log('Delete track:', trackData.id);
    setShowDeleteConfirm(false);
    navigate('/tracks');
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex-shrink-0"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="responsive-title text-gray-900">Manage Tracks</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Filter, sort, and access detailed tracks
          </p>
        </div>
      </div>

      {/* Track Details Container */}
      <div className="max-w-5xl mx-auto">
        {/* Track Image */}
        <div className="relative mb-6 md:mb-8">
          <img
            src={trackData.image}
            alt={trackData.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl md:rounded-2xl"
          />
          {/* Price Badge - Mobile */}
          <div className="md:hidden absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
            <span className="text-lg font-bold text-gray-900">{trackData.price}</span>
          </div>
        </div>

        {/* Track Info Card */}
        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm border border-gray-100">
          {/* Title and Price */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {trackData.title}
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 md:hidden">
                <span>{trackData.enrolledStudents} students</span>
                <span>•</span>
                <span>{trackData.completionRate}% completion</span>
              </div>
            </div>
            <div className="hidden md:block text-2xl font-bold text-gray-900 flex-shrink-0">
              {trackData.price}
            </div>
          </div>

          {/* Quick Info Cards - Mobile */}
          <div className="grid grid-cols-2 gap-3 mb-6 md:hidden">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Duration</span>
              </div>
              <div className="font-semibold text-gray-900">{trackData.duration}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <User className="w-4 h-4 mr-2" />
                <span>Instructor</span>
              </div>
              <div className="font-semibold text-gray-900">{trackData.instructor}</div>
            </div>
          </div>

          {/* Desktop Info Row */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <div className="flex items-center gap-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-medium">{trackData.duration}</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{trackData.instructor}</span>
              </div>
              <div className="flex items-center text-sm">
                <span>{trackData.enrolledStudents} students</span>
                <span className="mx-2">•</span>
                <span>{trackData.completionRate}% completion</span>
              </div>
            </div>
          </div>

          {/* Tags and Rating */}
          <div className="flex flex-col gap-4 mb-6">
            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {trackData.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {renderStars(trackData.rating)}
              </div>
              <span className="font-bold text-lg text-gray-900">
                {trackData.rating}
              </span>
              <span className="text-gray-500">/ 5.0</span>
              <span className="text-sm text-gray-500">
                ({trackData.totalRatings} reviews)
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {trackData.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              onClick={() => setShowUpdateModal(true)}
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-3 sm:py-0 sm:w-12 sm:h-12 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-800"
            >
              <Edit className="w-4 h-4 md:w-5 md:h-5" />
              <span className="sm:hidden">Edit Track</span>
            </button>
            <button 
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-3 sm:py-0 sm:w-12 sm:h-12 rounded-lg border border-red-300 hover:bg-red-50 transition-colors text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="sm:hidden">Delete Track</span>
            </button>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <UpdateTrackModal
          track={trackData}
          onClose={() => setShowUpdateModal(false)}
          onSubmit={handleUpdateSubmit}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Delete Track
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{trackData.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedTrackPage;