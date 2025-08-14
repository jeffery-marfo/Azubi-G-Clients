import React from "react";
import { Calendar } from "lucide-react";

const solutions = [
  {
    title: "Software Engineering",
    price: "$400",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: [
      { label: "NodeJs", color: "bg-green-100 text-green-600" },
      { label: "ReactJs", color: "bg-purple-100 text-purple-600" },
    ],
  },
  {
    title: "Cloud Computing",
    price: "$350",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    tags: [
      { label: "Azure", color: "bg-blue-100 text-blue-600" },
      { label: "AWS", color: "bg-sky-100 text-sky-600" },
    ],
  },
  {
    title: "Data Science",
    price: "$400",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    tags: [
      { label: "PowerBI", color: "bg-pink-100 text-pink-600" },
      { label: "Python", color: "bg-blue-100 text-blue-600" },
    ],
  },
  {
    title: "UI/UX",
    price: "$250",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80",
    tags: [
      { label: "Figma", color: "bg-orange-100 text-orange-500" },
      { label: "Sketch", color: "bg-pink-100 text-pink-500" },
    ],
  },
];

const OurSolutions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our solutions</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Create your account quickly with just your email or social media login, then explore a wide range
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-bold shadow text-gray-700">
                  {solution.price}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="font-semibold text-lg text-gray-900 mb-2">{solution.title}</div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {solution.duration}
                </div>
                <div className="mt-auto flex gap-2 flex-wrap">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;