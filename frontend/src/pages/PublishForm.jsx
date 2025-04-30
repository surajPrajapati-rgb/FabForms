import React from 'react';

const PublishForm = () => {
  return (
    <div className="p-6 flex-1">
      <h2 className="text-2xl font-bold mb-4">Publish Your Form</h2>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold">Customer Survey</h3>
        <p>Gather feedback from your customers about their experience with your products and services.</p>
        <div className="mt-4">
          <div className="flex justify-end">
            <button className="bg-white text-[#0B0F19] px-4 py-2 rounded">Back to Testing</button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Share Your Form</h4>
            <p>https://fabforms.com/form/abc456</p>
            <button className="bg-white text-[#0B0F19] px-4 py-2 rounded mt-2">Copy Link</button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Embed Code</h4>
            <button className="bg-white text-[#0B0F19] px-4 py-2 rounded">Embed Code</button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Access Settings</h4>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Public Access
            </label>
            <input type="password" placeholder="Enter password" className="w-full p-2 border rounded mt-2" />
            <input type="date" className="w-full p-2 border rounded mt-2" />
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Share Options</h4>
            <button className="bg-white text-[#0B0F19] px-4 py-2 rounded mr-2">Share via Email</button>
            <button className="bg-white text-[#0B0F19] px-4 py-2 rounded">Share via Social Media</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishForm;