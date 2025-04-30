import React from 'react';

const Analytics = () => {
  return (
    <div className="flex-1 bg-[#0B0F19] min-h-screen text-white p-8">
      <div>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-medium text-white">Analytics Dashboard</h2>
            <p className="text-gray-400 mt-1">View detailed insights about your form responses</p>
          </div>
          <button className="bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Back to Forms
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="col-span-9">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-[#151923] p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-4">
                    <i className="fas fa-users text-blue-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total Responses</p>
                    <p className="text-2xl font-medium text-white">120</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#151923] p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-shadow">
                <div className="flex items-center">
                  <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg mr-4">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Completion Rate</p>
                    <p className="text-2xl font-medium text-white">85%</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#151923] p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-shadow">
                <div className="flex items-center">
                  <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg mr-4">
                    <i className="fas fa-clock text-purple-500 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Avg. Time</p>
                    <p className="text-2xl font-medium text-white">2m 30s</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-[#151923] p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-medium text-white mb-4">Responses by Rating</h3>
                <div className="h-64 bg-[#1A1F2E] rounded-lg border border-gray-800 flex items-center justify-center">
                  <p className="text-gray-400">Bar Chart Placeholder</p>
                </div>
              </div>
              <div className="bg-[#151923] p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-medium text-white mb-4">Completion Breakdown</h3>
                <div className="h-64 bg-[#1A1F2E] rounded-lg border border-gray-800 flex items-center justify-center">
                  <p className="text-gray-400">Pie Chart Placeholder</p>
                </div>
              </div>
            </div>

            {/* Response Details */}
            <div className="bg-[#151923] rounded-lg border border-gray-800">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-lg font-medium text-white">Response Details</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 text-sm">
                        <th className="pb-4">Respondent</th>
                        <th className="pb-4">Rating</th>
                        <th className="pb-4">Comments</th>
                        <th className="pb-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="text-white">
                        <td className="py-4">John Doe</td>
                        <td className="py-4">4</td>
                        <td className="py-4">Great service</td>
                        <td className="py-4">2025-03-14</td>
                      </tr>
                      <tr className="text-white">
                        <td className="py-4">Jane Smith</td>
                        <td className="py-4">5</td>
                        <td className="py-4">Excellent experience</td>
                        <td className="py-4">2025-03-13</td>
                      </tr>
                      <tr className="text-white">
                        <td className="py-4">Mike Johnson</td>
                        <td className="py-4">3</td>
                        <td className="py-4">Good but could improve</td>
                        <td className="py-4">2025-03-12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="mt-6 bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                  Export as CSV
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="col-span-3 space-y-6">
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Response Trends</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 bg-opacity-20 p-2 rounded-lg mr-3">
                    <i className="fas fa-arrow-up text-blue-500"></i>
                  </div>
                  <div>
                    <p className="text-white text-sm">Response rate increased by 15%</p>
                    <p className="text-gray-400 text-xs">Compared to last week</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mr-3">
                    <i className="fas fa-chart-line text-green-500"></i>
                  </div>
                  <div>
                    <p className="text-white text-sm">Peak response time</p>
                    <p className="text-gray-400 text-xs">2:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#222837] transition-colors flex items-center border border-gray-800">
                  <i className="fas fa-download mr-2"></i>
                  Download Report
                </button>
                <button className="w-full bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#222837] transition-colors flex items-center border border-gray-800">
                  <i className="fas fa-share-alt mr-2"></i>
                  Share Analytics
                </button>
                <button className="w-full bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#222837] transition-colors flex items-center border border-gray-800">
                  <i className="fas fa-cog mr-2"></i>
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;