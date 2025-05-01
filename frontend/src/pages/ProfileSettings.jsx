import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="flex-1 bg-[#0B0F19] min-h-screen w-full">
      <div className="p-8 w-full">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-medium text-white">Profile & Settings</h2>
          <p className="text-gray-400 mt-1">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Profile and Security */}
          <div className="col-span-2 space-y-6">
            {/* Profile Section */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Profile Information</h3>
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src="https://via.placeholder.com/50" 
                    alt="Profile" 
                    className="rounded-full w-16 h-16 border-2 border-gray-800"
                  />
                  <button className="absolute bottom-0 right-0 bg-blue-500 text-black p-1 rounded-full">
                    <i className="fas fa-camera text-xs"></i>
                  </button>
                </div>
                <div className="ml-6">
                  <p className="text-white font-medium">John Doe</p>
                  <p className="text-gray-400 text-sm">johndoe@gmail.com</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value="John Doe" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    value="johndoe@gmail.com" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white"
                  />
                </div>
              </div>
              <button className="mt-4 bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Save Changes
              </button>
            </div>

            {/* Security Section */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Security</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Current Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter current password" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">New Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter new password" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="2fa" 
                      defaultChecked 
                      className="w-4 h-4 bg-[#1A1F2E] border-gray-800 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="2fa" className="ml-2 text-sm font-medium text-gray-400">
                      Two-Factor Authentication
                    </label>
                  </div>
                  <button className="bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Update Security
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Preferences and Plan */}
          <div className="space-y-6">
            {/* Preferences Section */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Language</label>
                  <select className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white">
                    <option value="en" className="bg-[#1A1F2E]">English</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="notifications" 
                      className="w-4 h-4 bg-[#1A1F2E] border-gray-800 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="notifications" className="ml-2 text-sm font-medium text-gray-400">
                      Email Notifications
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="darkMode" 
                      defaultChecked 
                      className="w-4 h-4 bg-[#1A1F2E] border-gray-800 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="darkMode" className="ml-2 text-sm font-medium text-gray-400">
                      Dark Mode
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Section */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Current Plan</h3>
              <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Free Plan</p>
                    <p className="text-gray-400 text-sm">Basic features and limited responses</p>
                  </div>
                  <button className="bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Danger Zone</h3>
              <div className="bg-[#1A1F2E] p-4 rounded-lg border border-red-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Delete Account</p>
                    <p className="text-gray-400 text-sm">This action cannot be undone</p>
                  </div>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;