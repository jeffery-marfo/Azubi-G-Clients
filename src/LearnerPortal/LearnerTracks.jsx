import React from 'react'
import { Search, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import SoftwareEng from '../assets/images/SoftwareEng.png'
import DataScience from '../assets/images/DataScience.png'
import CloudComputing from '../assets/images/CloudComputing.png'

const LearnerTracks = () => {
  const tracks = [
    {
      id: 1,
      slug: "software-development",
      title: "Software Development",
      description: "Unlock your potential with comprehensive training in modern software development",
      rating: 4.0,
      price: "$350",
      image: SoftwareEng
    },
    {
      id: 2,
      slug: "data-science-mastery",
      title: "Data Science Mastery", 
      description: "Equip yourself with the skills to analyze, interpret, and leverage data.",
      rating: 4.0,
      price: "$350",
      image: DataScience
    },
    {
      id: 3,
      slug: "cloud-computing-expertise",
      title: "Cloud Computing Expertise",
      description: "Gain hands-on experience in cloud preparing you to manage scalable...",
      rating: 4.0,
      price: "$350", 
      image: CloudComputing
    }
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }
    
    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      )
    }
    
    return stars
  }

  return (
    <div>
      {/* Header */}
      <div className="w-full bg-[#01589A] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-light text-center">
            Tracks
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Track"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Top Tracks Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Top Tracks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div key={track.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                {/* Card Image */}
                <div className="w-full h-60 overflow-hidden rounded-t-lg">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {track.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {track.description}
                  </p>
                  
                  {/* Rating and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {renderStars(track.rating)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {track.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Price: <span className="font-semibold text-gray-700">{track.price}</span>
                    </div>
                  </div>
                  
                  {/* Preview Button */}
                  <Link
                    to={`/learner/tracks/${track.slug}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-3 px-4 rounded-md transition-colors duration-200"
                  >
                    Preview course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnerTracks