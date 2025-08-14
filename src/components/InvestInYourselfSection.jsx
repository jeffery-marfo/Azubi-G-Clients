import React from "react";
import Invest from "../assets/images/Invest.png"

const InvestInYourselfSection = () => {
  return (
    <section 
      className="relative py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        // Replace with your imported background image
        backgroundImage: `url(${Invest})`,
        backgroundColor: '#e5e7eb', // Simple gray placeholder
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-900/20"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              It's time to start investing in yourself
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-[#01589A] border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern Overlay (optional decorative element) */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default InvestInYourselfSection;

