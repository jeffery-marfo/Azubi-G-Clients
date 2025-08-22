import React from "react";

// Local assets
import SignUp from "../assets/images/SignUp.png";
import Onboarding from "../assets/images/Onboarding.png";
import Learning from "../assets/images/Learning.png";

import SecureLogin from "../assets/images/SecureLogin.png";
import Auth from "../assets/images/Auth.png";

import SoftwareDev from "../assets/images/SoftwareDev.png";
import DataSci from "../assets/images/DataSci.png";
import CloudComp from "../assets/images/CloudComp.png";

function CourseProcess() {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={SignUp} alt="Sign Up" className="w-8 h-8" />
              <h3 className="font-semibold text-lg text-gray-900">
                Sign Up and Choose Your Course
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Create your account quickly with just your email or social media login, 
              then explore a wide range
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <span className="text-blue-500 text-2xl">↓</span>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={Onboarding} alt="Onboarding" className="w-8 h-8" />
              <h3 className="font-semibold text-lg text-gray-900">Onboarding</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get started seamlessly with a smooth onboarding experience. Learn 
              the essentials and set yourself up for success from day one.
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <span className="text-blue-500 text-2xl">↓</span>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={Learning} alt="Start Learning" className="w-8 h-8" />
              <h3 className="font-semibold text-lg text-gray-900">Start Learning</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Start your learning journey with practical, hands-on experience. 
              Develop the skills needed to build, implement, and manage effective 
              solutions.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-xl shadow-lg p-12 w-full">
          {/* Steps 1 & 2 */}
          <div className="flex justify-between mb-10">
            {/* Step 1 */}
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 mb-2">1</div>
              <img src={SecureLogin} alt="Secure Login" className="w-50 h-50 object-contain mx-auto" />
              <div className="mt-3 text-sm font-medium text-gray-800">Secure Login</div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 mb-2">2</div>
              <img src={Auth} alt="Authentication" className="w-50 h-50 object-contain mx-auto" />
              <div className="mt-3 text-sm font-medium text-gray-800">Authentication</div>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-lg font-bold text-gray-900">3</div>
              <h3 className="text-base font-semibold text-gray-900">Choose a course</h3>
            </div>

            {/* Course Cards - All 3 in one row */}
            <div className="grid grid-cols-3 gap-4">
              {/* Software Dev */}
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <img src={SoftwareDev} alt="Software Dev" className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-medium text-sm text-gray-900 mb-1">Software Development</h4>
                <p className="text-gray-600 text-xs mb-3 leading-snug">
                  Unlock your potential with comprehensive training in modern software development
                </p>
                <div className="text-xs font-semibold text-gray-900">Price: $350</div>
              </div>

              {/* Data Science */}
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <img src={DataSci} alt="Data Science" className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-medium text-sm text-gray-900 mb-1">Data Science Mastery</h4>
                <p className="text-gray-600 text-xs mb-3 leading-snug">
                  Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert
                </p>
                <div className="text-xs font-semibold text-gray-900">Price: $350</div>
              </div>

              {/* Cloud Computing */}
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <img src={CloudComp} alt="Cloud Computing" className="w-10 h-10 mx-auto mb-3" />
                <h4 className="font-medium text-sm text-gray-900 mb-1">Cloud Computing </h4>
                <p className="text-gray-600 text-xs mb-3 leading-snug">
                  Gain hands-on experience in cloud architecture, preparing you to manage scalable solutions
                </p>
                <div className="text-xs font-semibold text-gray-900">Price: $350</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseProcess;