import React from "react";
import Step from '../assets/images/Step.png'
const NextStepSection = () => {
  const technologies = [
    // First row
    [
      { name: "ReactJs", highlighted: false },
      { name: "NextJs", highlighted: false },
      { name: "NodeJs", highlighted: false },
      { name: "Django", highlighted: true },
    ],
    // Second row
    [
      { name: "MongoDB", highlighted: true },
      { name: "VueJs", highlighted: false },
      { name: "AWS", highlighted: true },
      { name: "Azure", highlighted: false },
    ],
    // Third row
    [
      { name: "PowerBI", highlighted: false },
      { name: "Python", highlighted: false },
      { name: "Excel", highlighted: false },
      { name: "Tableau", highlighted: true },
    ],
  ];

  return (
    <section className="bg-[#01589A] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">What will be next step</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Discover our diverse stack of solutions, including software 
              development, data science, and cloud tools. Sign up today and 
              kickstart your journey!
            </p>
            
            {/* Technology Grid */}
            <div className="space-y-4">
              {technologies.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap gap-4">
                  {row.map((tech, techIndex) => (
                    <button
                      key={tech.name}
                      className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-200 hover:scale-105 ${
                        tech.highlighted
                          ? "border-red-400 text-red-400 bg-red-400/10"
                          : "border-blue-300 text-blue-100 hover:bg-blue-500/20"
                      }`}
                    >
                      {tech.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative">
            
            
            {/* Optional: You can replace the placeholder with your image like this: */}
            
            <img 
              src={Step} 
              alt="Next Step Visualization" 
              className="w-full h-auto "
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepSection;