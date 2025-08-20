import React, { useState, useRef } from "react";
import { User, Phone, MapPin, Lock, LogOut, Plus, Camera } from "lucide-react";
import LearnerNavbar from "./LearnerNavbar"; // Import your existing navbar

// Input field with icon
const InputField = ({ icon: Icon, type, placeholder, value, onChange }) => (
  <div className="flex items-center rounded-md bg-white shadow-sm px-3 py-2">
    <Icon className="w-4 h-4 text-gray-400 mr-2" />
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full focus:outline-none text-sm text-gray-700"
    />
  </div>
);

function SettingsPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Get display name - show "John Doe" as default if both fields are empty
  const getDisplayName = () => {
    if (!firstName && !lastName) {
      return "John Doe";
    }
    return `${firstName} ${lastName}`.trim();
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Use your existing LearnerNavbar component */}
      <LearnerNavbar />

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
        {/* Sidebar Profile */}
        <div className="w-1/4 flex flex-col items-center">
          <div 
            className="w-32 h-32 bg-gray-200 rounded-full mb-4 relative cursor-pointer group overflow-hidden"
            onClick={triggerFileInput}
          >
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-12 h-12 text-gray-400" />
              </div>
            )}
            {/* Overlay with camera icon */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <h3 className="font-semibold text-gray-800">{getDisplayName()}</h3>
          <p className="text-gray-500 text-sm">Learner</p>
        </div>

        {/* Settings Forms */}
        <div className="flex-1 space-y-8">
          {/* Profile Section */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField 
                icon={User} 
                type="text" 
                placeholder="First name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputField 
                icon={User} 
                type="text" 
                placeholder="Last name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <InputField 
                icon={Phone} 
                type="text" 
                placeholder="Phone" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <InputField 
                icon={MapPin} 
                type="text" 
                placeholder="Location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </section>

          {/* Change Password Section */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField 
                icon={Lock} 
                type="password" 
                placeholder="New password" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <InputField 
                icon={Lock} 
                type="password" 
                placeholder="Confirm password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </section>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">
              Save changes <Plus className="ml-2 w-4 h-4" />
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow hover:bg-gray-200">
              <LogOut className="mr-2 w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;