import React from 'react';

const FormTesting = () => {
  return (
    <div className="flex-1 bg-[#0B0F19] min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-medium text-white">Test Your Form</h2>
            <p className="text-gray-400 mt-1">Preview and test your form before publishing</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Form Preview Section */}
          <div className="col-span-2">
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-6">Contact Information</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Age</label>
                  <input 
                    type="number" 
                    placeholder="Enter your age" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Submit Test
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6">
            {/* AI Suggestions */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">AI Suggestions</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <i className="fas fa-lightbulb text-blue-400 mt-1 mr-2"></i>
                  <span>Consider adding a phone number field for better contact options</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-lightbulb text-blue-400 mt-1 mr-2"></i>
                  <span>Add validation for minimum age requirement</span>
                </li>
              </ul>
            </div>

            {/* Test Log */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Test Log</h3>
              <div className="space-y-3">
                <div className="bg-red-500 bg-opacity-20 text-white p-3 rounded-lg text-sm">
                  Test 1 Failed - Email field missing
                </div>
                <div className="bg-green-500 bg-opacity-20 text-white p-3 rounded-lg text-sm">
                  Test 2 Passed - All fields valid
                </div>
              </div>
              <button 
                className="w-full bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors mt-4"
              >
                Publish Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTesting;