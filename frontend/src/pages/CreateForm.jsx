import React from 'react';
import { Sidebar } from './Sidebar';

const CreateForm = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Create a New Form</h2>
        <div className="flex justify-end space-x-4 mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Draft</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Save & Test</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Preview</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4 ml-2">JSON Schema View</button>
          <div className="mt-4">
            <input type="text" placeholder="Enter your prompt, e.g. 'Create a survey for customer satisfaction'" className="w-full p-2 border rounded" />
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Generate Form</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;