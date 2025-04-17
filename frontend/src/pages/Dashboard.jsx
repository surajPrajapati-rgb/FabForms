import React from 'react';
import { Sidebar } from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Welcome, John!</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center">
              <i className="fas fa-file-alt text-green-500 mr-2"></i>
              <span>5 Forms Created</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center">
              <i className="fas fa-chart-bar text-green-500 mr-2"></i>
              <span>120 Responses to Top Form</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center">
              <i className="fas fa-play-circle text-green-500 mr-2"></i>
              <span>3 Active Forms</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Customer Feedback</h3>
            <p>Created: March 15, 2025</p>
            <p>Responses: 45</p>
            <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Published</span>
            <div className="mt-2">
              <button className="text-blue-600 mr-2">Edit</button>
              <button className="text-blue-600">View Analytics</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Employee Survey</h3>
            <p>Created: March 10, 2025</p>
            <p>Responses: 0</p>
            <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">Draft</span>
            <div className="mt-2">
              <button className="text-blue-600">Edit</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Product Review</h3>
            <p>Created: March 5, 2025</p>
            <p>Responses: 75</p>
            <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Published</span>
            <div className="mt-2">
              <button className="text-blue-600 mr-2">Edit</button>
              <button className="text-blue-600">View Analytics</button>
            </div>
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">+ Create New Form</button>
      </div>
    </div>
  );
};

export default Dashboard;