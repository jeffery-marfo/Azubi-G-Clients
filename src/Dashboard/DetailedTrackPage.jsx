import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Star, Edit, Trash2 } from 'lucide-react';
import UpdateTrackModal from '../components/UpdateTrackModal'; // make sure path is correct

const DetailedTrackPage = () => {
  const navigate = useNavigate();
  const { trackId } = useParams();

  const [showUpdateModal, setShowUpdateModal] = useState(false);

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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    // You can send updatedTrack to backend here
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Manage Tracks</h1>
            <p className="text-gray-500 text-sm">
              Filter, sort, and access detailed tracks
            </p>
          </div>
        </div>

        {/* Track Details */}
        <div className="max-w-4xl">
          {/* Track Image */}
          <div className="relative mb-8">
            <img
              src={trackData.image}
              alt={trackData.title}
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>

          {/* Track Info */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {trackData.title}
            </h2>

            {/* Info row with duration, instructor and price */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">{trackData.duration}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span className="font-medium">{trackData.instructor}</span>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-800">
                {trackData.price}
              </div>
            </div>

            {/* Tags + Rating in one line */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="flex gap-3 flex-wrap">
                {trackData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {renderStars(trackData.rating)}
                </div>
                <span className="font-bold text-lg text-gray-900">
                  {trackData.rating}
                </span>
                <span className="text-gray-500">/ 5.0</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {trackData.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowUpdateModal(true)}
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Edit className="w-5 h-5 text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                <Trash2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
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
    </div>
  );
};

export default DetailedTrackPage;
