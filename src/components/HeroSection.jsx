import React from 'react';
import Hero from '../assets/images/Hero.png';

function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - Covers entire hero section */}
      <div className="absolute inset-0">
        <img 
          src={Hero} 
          alt="Professional woman with glasses and backpack" 
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/10 to-black/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                <span className="whitespace-nowrap">Unlock Your Potential with</span>{' '}
                <span className="block">Industry-Leading Courses!</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                "Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed."
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                Get started
              </button>
            </div>

            {/* Right Content - Image Area */}
            <div className="hidden lg:block">
              {/* This space is for the background image which is handled by the absolute positioned div */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
    </div>
  );
}

export default HeroSection;