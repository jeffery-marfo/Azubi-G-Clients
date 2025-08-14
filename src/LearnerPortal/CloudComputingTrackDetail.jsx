import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, BookOpen, User, Calendar, ChevronRight, GraduationCap } from "lucide-react";
import SoftwareEng from "../assets/images/SoftwareEng.png";
import DataScience from "../assets/images/DataScience.png";
import CloudComputing from "../assets/images/CloudComputing.png";

const CloudComputingTrackDetail = () => {
  // Cloud Computing specific course data
  const course = {
    id: 3,
    title: "Cloud Computing Expertise",
    description:
      "Master the fundamentals of cloud computing and become an expert in designing, deploying, and managing scalable cloud solutions across AWS, Azure, and Google Cloud Platform.",
    instructor: "Michael Johnson",
    students: 62,
    reviews: 1,
    rating: 5,
    duration: "16 weeks",
    lessons: 8,
    date: "05/2025",
    price: 400,
    image: CloudComputing,
    learn: [
      "Master cloud architecture principles and design patterns for scalable applications.",
      "Deploy and manage applications on AWS, Azure, and Google Cloud Platform.",
      "Implement Infrastructure as Code using Terraform, CloudFormation, and ARM templates.",
      "Build containerized applications with Docker and orchestrate with Kubernetes.",
      "Design secure cloud networks with VPCs, load balancers, and auto-scaling groups.",
      "Monitor and optimize cloud costs while maintaining high availability and performance.",
      "Implement DevOps practices with CI/CD pipelines in cloud environments.",
      "Work with cloud databases, storage solutions, and serverless computing platforms."
    ],
    related: [
      {
        id: 1,
        title: "Software Development Track",
        description:
          "Unlock your potential with comprehensive training in modern software development.",
        image: SoftwareEng,
      },
      {
        id: 2,
        title: "Data Science Mastery",
        description:
          "Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert.",
        image: DataScience,
      },
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue Header Section */}
      <div className="bg-blue-600 text-white relative">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="flex items-center space-x-2 text-sm text-blue-100">
            <Link to="/learner/homepage" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/learner/tracks" className="hover:text-white">Tracks</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Cloud Computing Expertise</span>
          </div>
        </div>

        {/* Header Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-light mb-4">
                {course.title}
              </h1>
              
              <div className="text-blue-100 mb-6 leading-relaxed">
                <p>Master the fundamentals of cloud computing and become an expert in designing, deploying, and managing scalable cloud solutions.</p>
                <p>Gain hands-on experience with AWS, Azure, and Google Cloud Platform to build your cloud expertise!</p>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-medium text-white">Instructor</div>
                  <div className="text-blue-100">{course.instructor}</div>
                </div>
                <div>
                  <div className="font-medium text-white">Enrolled students</div>
                  <div className="text-blue-100">{course.students}</div>
                </div>
                <div>
                  <div className="font-medium text-white">{course.reviews} review</div>
                  <div className="flex items-center mt-1">
                    {renderStars(course.rating)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Empty space for absolute positioned card */}
            <div className="lg:col-span-1 hidden lg:block"></div>
          </div>
        </div>

        {/* Course Details Card - Positioned absolutely to overlap sections */}
        <div className="absolute top-16 right-6 lg:right-32 w-80 z-20 hidden lg:block">
          <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
            {/* Course Image */}
            <div className="p-4 pb-0">
              <img 
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded"
              />
            </div>
            
            {/* Course Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Course Details
              </h3>
              
              <div className="space-y-0 mb-6">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Duration</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {course.duration}
                  </span>
                </div>
                <div className="border-b" style={{ borderColor: '#E6E6E6' }}></div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2">
                    < GraduationCap className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Courses</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {course.lessons}
                  </span>
                </div>
                <div className="border-b" style={{ borderColor: '#E6E6E6' }}></div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Instructor</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {course.instructor}
                  </span>
                </div>
                <div className="border-b" style={{ borderColor: '#E6E6E6' }}></div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Date</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {course.date}
                  </span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  ${course.price.toFixed(2)}
                </div>
                {/* FIXED: Changed from button to Link */}
                <Link 
                  to='/learner/tracks/check-out' 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 inline-block text-center"
                >
                  Enroll
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2">
            {/* What you'll learn */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What you'll learn
              </h2>
              <ul className="space-y-3">
                {course.learn.map((outcome, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed text-sm">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore related courses */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Explore related courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.related.map((relatedCourse) => (
                  <div key={relatedCourse.id} className="bg-white rounded-lg overflow-hidden shadow-sm" style={{ border: '1px solid #E6E6E6' }}>
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={relatedCourse.image} 
                        alt={relatedCourse.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        {relatedCourse.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {relatedCourse.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Course Details (shown only on mobile) */}
          <div className="lg:hidden">
            <div className="bg-white rounded-lg overflow-hidden mb-6">
              {/* Course Image */}
              <div className="p-4 pb-0">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              
              {/* Course Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Course Details
                </h3>
                
                <div className="space-y-0 mb-6">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Duration</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {course.duration}
                    </span>
                  </div>
                  <div className="border-b" style={{ borderColor: '#E6E6E6' }}></div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Courses</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {course.lessons}
                    </span>
                  </div>
                  <div className="border-b" style={{ borderColor: '#E6E6E6' }}></div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Instructor</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {course.instructor}
                    </span>
                  </div>
                  <div className="border-b" style={{ borderColor: '#E6E6E6' }}></div>
                  
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Date</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {course.date}
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    ${course.price.toFixed(2)}
                  </div>
                  <Link to='/learner/tracks/check-out' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 inline-block text-center">
                    Enroll
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Empty space on desktop to account for absolute positioned card */}
          <div className="lg:col-span-1 hidden lg:block">
            {/* This space is intentionally left empty to account for the absolutely positioned card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudComputingTrackDetail;