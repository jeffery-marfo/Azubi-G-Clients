import React, { useState } from 'react';
import { Camera, Eye, EyeOff } from 'lucide-react';

const ManageProfile = () => {
  const [firstName, setFirstName] = useState('James');
  const [lastName, setLastName] = useState('Anderson');
  const [fullName, setFullName] = useState('James Anderson');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleUpdate = () => {
    console.log({
      firstName,
      lastName,
      fullName,
      newPassword,
      confirmPassword
    });
  };

  return (
    <div className="min-h-screen flex flex-col px-4 pt-10 pb-20">
      {/* Heading */}
      <div className="w-full max-w-2xl ml-0">
        <h1 className="text-2xl font-semibold text-gray-900">Manage Profile</h1>
        <p className="text-gray-500 text-sm mt-1">Update the profile and make</p>
      </div>

      {/* Form Card */}
      <div className="bg-white shadow-sm rounded-xl mt-6 p-8 w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
              <Camera size={16} className="text-gray-600" />
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-2">Change profile picture</p>
        </div>

        <div className="mt-8 space-y-4">
          {/* First name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Full name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Change password */}
          <div className="pt-2">
            <p className="text-sm font-semibold text-gray-700 mb-2">Change password</p>

            {/* New password */}
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                placeholder="New password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm password */}
            <div className="relative mt-4">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Update button */}
          <div className="pt-6">
            <button
              onClick={handleUpdate}
              className="w-full bg-blue-700 text-white py-2 rounded-md font-medium hover:bg-blue-800 transition"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
