import React from 'react';
import { Sidebar } from './Sidebar';

const HelpSupport = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Help & Support</h2>
        <p className="mb-4">Find answers to common questions or reach out to our support team</p>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Frequently Asked Questions</h3>
          <select className="w-full p-2 border rounded mt-2">
            <option>How do I create a form?</option>
            <option>How to share forms with my team?</option>
            <option>Can I export form responses?</option>
          </select>
          <h3 className="font-bold mt-4">Video Tutorials</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 p-4 rounded shadow">
              <i className="fas fa-play-circle text-blue-600 mb-2"></i>
              <p>Getting Started</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Watch Tutorial</button>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <i className="fas fa-star text-blue-600 mb-2"></i>
              <p>Advanced Features</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Watch Tutorial</button>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <i className="fas fa-tools text-blue-600 mb-2"></i>
              <p>Troubleshooting</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Watch Tutorial</button>
            </div>
          </div>
          <h3 className="font-bold mt-4">Contact Support</h3>
          <form className="space-y-4 mt-2">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
          </form>
          <p className="mt-4 text-blue-600">Join our community forum →</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;