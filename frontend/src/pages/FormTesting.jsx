import React from 'react';
import { Sidebar } from './Sidebar';

const FormTesting = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Test Your Form</h2>
        <div className="flex">
          <div className="w-2/3 p-4">
            <h3 className="font-bold">Contact Information</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Enter your full name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded" />
              <input type="number" placeholder="Enter your age" className="w-full p-2 border rounded" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Test</button>
            </form>
          </div>
          <div className="w-1/3 p-4">
            <h3 className="font-bold">AI Suggestions</h3>
            <ul className="list-disc pl-5">
              <li>Consider adding a phone number field for better contact options</li>
              <li>Add validation for minimum age requirement</li>
            </ul>
            <h3 className="font-bold mt-4">Test Log</h3>
            <div className="space-y-2">
              <p className="bg-red-200 p-2 rounded">Test 1 Failed - Email field missing</p>
              <p className="bg-green-200 p-2 rounded">Test 2 Passed - All fields valid</p>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Publish Form</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTesting;