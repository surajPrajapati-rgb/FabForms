import React from 'react';
import { Sidebar } from './Sidebar';

const Analytics = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
        <div className="flex justify-end mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Back to Forms</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center">
              <i className="fas fa-users text-green-500 mr-2"></i>
              <span>Total Responses</span>
            </div>
            <p className="text-2xl">120</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              <span>Completion Rate</span>
            </div>
            <p className="text-2xl">85%</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center">
              <i className="fas fa-clock text-green-500 mr-2"></i>
              <span>Avg. Time</span>
            </div>
            <p className="text-2xl">2m 30s</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Responses by Rating</h3>
            <p>Bar Chart Placeholder</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Completion Breakdown</h3>
            <p>Pie Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow mt-4">
          <h3 className="font-bold">Response Details</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th>Respondent</th>
                <th>Rating</th>
                <th>Comments</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>4</td>
                <td>Great service</td>
                <td>2025-03-14</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>5</td>
                <td>Excellent experience</td>
                <td>2025-03-13</td>
              </tr>
              <tr>
                <td>Mike Johnson</td>
                <td>3</td>
                <td>Good but could improve</td>
                <td>2025-03-12</td>
              </tr>
            </tbody>
          </table>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Export as CSV</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;