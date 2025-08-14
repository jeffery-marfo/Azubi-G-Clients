import React from "react";
import GradCap from "../assets/images/GradCap.png";
import Grad from "../assets/images/Grad.png";
import Clock from "../assets/images/Clock.png";

const WeAreProudSection = () => {
  const stats = [
    {
      number: "4+",
      label: "Courses",
      icon: GradCap, // Now properly using the imported image
      alt: "Graduation cap icon"
    },
    {
      number: "200+",
      label: "Course students",
      icon: Grad, // Now properly using the imported image
      alt: "Graduate icon"
    },
    {
      number: "250+",
      label: "Hours of content",
      icon: Clock, // Now properly using the imported image
      alt: "Clock icon"
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We are proud</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We take pride in our achievements and commitment to excellence. Join us in celebrating innovation, growth, and success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <img 
                  src={stat.icon} 
                  alt={stat.alt}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Number */}
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-gray-700 font-medium text-lg">
                {stat.label}
              </div>

              {/* Separator line (except for last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-px h-24 bg-gray-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeAreProudSection;