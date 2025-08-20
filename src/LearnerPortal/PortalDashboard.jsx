import React from "react";
import LearnerNavbar from "../LearnerPortal/LearnerNavbar"; // Import your existing navbar
import CloudC from "../assets/images/CloudC.png";
import Django from "../assets/images/Django.png";
import JsReact from "../assets/images/JsReact.png";
import NextJs from "../assets/images/NextJs.png";
import NodeJs from "../assets/images/NodeJs.png";
import SoftD from "../assets/images/SoftD.png";

// Course Card Component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
      <img
        src={course.image}
        alt={course.subtitle}
        className="rounded-lg w-full h-50 object-cover"
      />
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-600 ">
          {course.subtitle}
        </h3>
        <p className="text-base font-bold text-gray-800 mb-12">{course.title}</p>
        <p className="text-blue-600 text-sm mt-2 cursor-pointer">
          {course.status}
        </p>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex gap-6 items-center">
      <img
        src={feature.image}
        alt={feature.title}
        className="w-60 h-60 object-cover rounded-lg flex-shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

// Main Dashboard Page
function PortalDashboard() {
  // Course Data
  const courses = [
    {
      id: 1,
      title: "Quick Introduction to ReactJs",
      subtitle: "ReactJs",
      image: JsReact,
      status: "Registered",
    },
    {
      id: 2,
      title: "Quick Introduction to NodeJs",
      subtitle: "NodeJs",
      image: NodeJs,
      status: "Registered",
    },
    {
      id: 3,
      title: "Quick Introduction to NextJs",
      subtitle: "NextJs",
      image: NextJs,
      status: "Registered",
    },
    {
      id: 4,
      title: "Quick Introduction to Django",
      subtitle: "Django",
      image: Django,
      status: "Registered",
    },
  ];

  // Features Data
  const features = [
    {
      id: 1,
      title: "Software Development",
      description:
        "Unlock your potential with comprehensive training in modern software development",
      image: SoftD,
    },
    {
      id: 2,
      title: "Cloud Computing",
      description:
        "Gain hands-on experience in cloud architecture, preparing you to manage scalable solutions.",
      image: CloudC,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Use your existing LearnerNavbar component */}
      <LearnerNavbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Enrolled Courses */}
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Enrolled courses
        </h2>

        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Software Development Track
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Rate Us Section */}
        <h2 className="text-xl font-bold text-gray-800 mb-6">Rate us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortalDashboard;