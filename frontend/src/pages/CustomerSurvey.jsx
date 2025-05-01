import React from 'react';

const CustomerSurvey = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Satisfaction Survey</h2>
      <p className="mb-4">Please fill out all fields marked with an asterisk (*)</p>
      <form className="bg-white p-4 rounded shadow max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded" required />
        <select className="w-full p-2 border rounded" required>
          <option value="">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea placeholder="Your feedback" className="w-full p-2 border rounded" required></textarea>
        <div className="flex items-center">
          <label className="mr-2">Upload a file:</label>
          <input type="file" className="border rounded p-2" />
          <span className="ml-2 text-gray-500">PDF, DOC, IMG up to 20Mb</span>
        </div>
        <button type="submit" className="bg-white text-[#0B0F19] px-4 py-2 rounded w-full">Submit Response</button>
      </form>
      <p className="text-center mt-4 text-gray-500">Powered by FabForms</p>
    </div>
  );
};

export default CustomerSurvey;