import React from 'react';

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <div className="text-xl font-bold mb-6">FabForms</div>
      <ul className="space-y-4">
        <li><a href="#dashboard" className="text-blue-600 font-medium">Dashboard</a></li>
        <li><a href="#projects" className="text-blue-600 font-medium">Projects</a></li>
        <li><a href="#form-testing" className="text-blue-600 font-medium">Form Testing</a></li>
        <li><a href="#analytics" className="text-blue-600 font-medium">Analytics</a></li>
        <li><a href="#help-support" className="text-blue-600 font-medium">Help & Support</a></li>
        <li><a href="#settings" className="text-blue-600 font-medium">Settings</a></li>
        <li><a href="#logout" className="text-blue-600 font-medium">Log Out</a></li>
      </ul>
    </div>
  );
};