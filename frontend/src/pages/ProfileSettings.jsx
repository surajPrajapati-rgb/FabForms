import React from 'react';
import { Sidebar } from './Sidebar';

const ProfileSettings = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Profile & Settings</h2>
        <div className="bg-white p-4 rounded shadow max-w-md mx-auto">
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full mr-4" />
            <div>
              <p className="font-bold">Full Name</p>
              <p>John Doe</p>
            </div>
            <input type="email" value="johndoe@gmail.com" className="ml-4 p-2 border rounded" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded ml-4">Save Changes</button>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Security</h3>
            <input type="password" placeholder="Current Password" className="w-full p-2 border rounded mt-2" />
            <input type="password" placeholder="New Password" className="w-full p-2 border rounded mt-2" />
            <div className="flex items-center mt-2">
              <label className="mr-2">Two-Factor Authentication</label>
              <input type="checkbox" className="mr-2" defaultChecked />
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Update Security Settings</button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Preferences</h3>
            <select className="w-full p-2 border rounded mt-2">
              <option value="en">English</option>
            </select>
            <div className="flex items-center mt-2">
              <label className="mr-2">Email Notifications</label>
              <input type="checkbox" className="mr-2" />
            </div>
            <div className="flex items-center mt-2">
              <label className="mr-2">Dark Mode</label>
              <input type="checkbox" className="mr-2" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Current Plan</h3>
            <p>Free Plan</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Upgrade Plan</button>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Delete Account</h3>
            <p>This action cannot be undone</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded mt-2">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;