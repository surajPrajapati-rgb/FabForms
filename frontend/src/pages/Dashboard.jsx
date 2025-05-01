import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex-1 bg-[#0B0F19] min-h-screen text-white p-8">
      <div>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-medium text-white">Welcome back, John!</h2>
            <p className="text-gray-400 mt-1">Here's what's happening with your forms today</p>
          </div>
          <Link 
            to="/create-form" 
            className="bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center"
          >
            <i className="fas fa-plus mr-2"></i>
            Create New Form
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Stats and Recent Forms */}
          <div className="col-span-9">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-[#151923] p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-4">
                    <i className="fas fa-file-alt text-blue-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Forms Created</p>
                    <p className="text-2xl font-medium text-white">5</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#151923] p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-shadow">
                <div className="flex items-center">
                  <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg mr-4">
                    <i className="fas fa-chart-bar text-green-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Responses to Top Form</p>
                    <p className="text-2xl font-medium text-white">120</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#151923] p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-shadow">
                <div className="flex items-center">
                  <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg mr-4">
                    <i className="fas fa-play-circle text-purple-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Active Forms</p>
                    <p className="text-2xl font-medium text-white">3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Forms Section */}
            <div className="bg-[#151923] rounded-lg border border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-medium text-white">Recent Forms</h3>
              </div>
              <div className="divide-y divide-gray-800">
                <div className="p-6 hover:bg-[#1A1F2E] transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-white">Customer Feedback</h4>
                      <p className="text-gray-400 text-sm mt-1">Created: March 15, 2025</p>
                    </div>
                    <span className="bg-green-500 bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">Published</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-400">45 Responses</p>
                    <div className="flex space-x-4">
                      <Link to="/form-testing" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Edit</Link>
                      <Link to="/analytics" className="text-blue-400 hover:text-blue-300 text-sm font-medium">View Analytics</Link>
                    </div>
                  </div>
                </div>

                <div className="p-6 hover:bg-[#1A1F2E] transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-white">Employee Survey</h4>
                      <p className="text-gray-400 text-sm mt-1">Created: March 10, 2025</p>
                    </div>
                    <span className="bg-gray-500 bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">Draft</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-400">0 Responses</p>
                    <div className="flex space-x-4">
                      <Link to="/form-testing" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Edit</Link>
                    </div>
                  </div>
                </div>

                <div className="p-6 hover:bg-[#1A1F2E] transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-white">Product Review</h4>
                      <p className="text-gray-400 text-sm mt-1">Created: March 5, 2025</p>
                    </div>
                    <span className="bg-green-500 bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">Published</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-400">75 Responses</p>
                    <div className="flex space-x-4">
                      <Link to="/form-testing" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Edit</Link>
                      <Link to="/analytics" className="text-blue-400 hover:text-blue-300 text-sm font-medium">View Analytics</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="col-span-3">
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-lg mr-3">
                    <i className="fas fa-user-edit text-blue-500"></i>
                  </div>
                  <div>
                    <p className="text-white text-sm">Customer Feedback form edited</p>
                    <p className="text-gray-400 text-xs">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mr-3">
                    <i className="fas fa-check-circle text-green-500"></i>
                  </div>
                  <div>
                    <p className="text-white text-sm">New response received</p>
                    <p className="text-gray-400 text-xs">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;