import React from 'react';

const CreateForm = () => {
  return (
    <div className="flex-1 bg-[#0B0F19] min-h-screen text-white p-8">
      <div>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-medium text-white">Create a New Form</h2>
            <p className="text-gray-400 mt-1">Design your form using AI or start from scratch</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-[#151923] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1A1F2E] transition-colors flex items-center border border-gray-800">
              <i className="fas fa-save mr-2"></i>
              Save Draft
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex items-center">
              <i className="fas fa-play mr-2"></i>
              Save & Test
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Form Builder */}
          <div className="col-span-9">
            <div className="bg-[#151923] rounded-lg border border-gray-800">
              {/* Toolbar */}
              <div className="border-b border-gray-800 p-4">
                <div className="flex space-x-4">
                  <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex items-center">
                    <i className="fas fa-eye mr-2"></i>
                    Preview
                  </button>
                  <button className="bg-[#1A1F2E] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#222837] transition-colors flex items-center border border-gray-800">
                    <i className="fas fa-code mr-2"></i>
                    JSON Schema View
                  </button>
                </div>
              </div>

              {/* Form Generation Section */}
              <div className="p-6">
                <div className="bg-[#1A1F2E] p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-medium text-white mb-4">AI Form Generation</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Describe your form
                      </label>
                      <textarea 
                        placeholder="Enter your prompt, e.g. 'Create a survey for customer satisfaction with multiple choice questions and a feedback section'"
                        className="w-full p-3 bg-[#151923] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors min-h-[100px] text-white placeholder-gray-500"
                      />
                    </div>
                    <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex items-center justify-center">
                      <i className="fas fa-magic mr-2"></i>
                      Generate Form
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-white mb-4">Or start from a template</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-[#1A1F2E] border border-gray-800 rounded-lg hover:border-blue-500 cursor-pointer transition-colors">
                      <i className="fas fa-poll text-blue-500 text-xl mb-2"></i>
                      <h4 className="font-medium text-white">Customer Survey</h4>
                      <p className="text-sm text-gray-400">Gather feedback about your products or services</p>
                    </div>
                    <div className="p-4 bg-[#1A1F2E] border border-gray-800 rounded-lg hover:border-blue-500 cursor-pointer transition-colors">
                      <i className="fas fa-clipboard-list text-blue-500 text-xl mb-2"></i>
                      <h4 className="font-medium text-white">Contact Form</h4>
                      <p className="text-sm text-gray-400">Collect inquiries and messages</p>
                    </div>
                    <div className="p-4 bg-[#1A1F2E] border border-gray-800 rounded-lg hover:border-blue-500 cursor-pointer transition-colors">
                      <i className="fas fa-calendar-check text-blue-500 text-xl mb-2"></i>
                      <h4 className="font-medium text-white">Event Registration</h4>
                      <p className="text-sm text-gray-400">Manage event signups and RSVPs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Properties */}
          <div className="col-span-3 space-y-6">
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Form Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Response Limit</label>
                  <input 
                    type="number" 
                    placeholder="e.g., 1000"
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Expiry Date</label>
                  <input 
                    type="date" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-400">Require Sign-in</label>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-[#1A1F2E] border border-gray-800">
                    <input type="checkbox" className="sr-only peer" />
                    <span className="absolute inset-0 peer-checked:bg-blue-500 rounded-full transition-colors"></span>
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-400">Email on Response</label>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-[#1A1F2E] border border-gray-800">
                    <input type="checkbox" className="sr-only peer" />
                    <span className="absolute inset-0 peer-checked:bg-blue-500 rounded-full transition-colors"></span>
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Notify Email Addresses</label>
                  <input 
                    type="text" 
                    placeholder="Enter email addresses"
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Customization</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Theme Color</label>
                  <div className="space-y-4">
                    {/* Primary Colors */}
                    <div>
                      <p className="text-xs text-gray-400 mb-2">Primary Colors</p>
                      <div className="grid grid-cols-6 gap-3">
                        <button className="group relative w-10 h-10">
                          <span className="absolute inset-0 rounded-full bg-blue-500 hover:ring-2 ring-blue-400 ring-offset-2 ring-offset-[#1A1F2E] transition-all"></span>
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap">Blue</span>
                        </button>
                        <button className="group relative w-10 h-10">
                          <span className="absolute inset-0 rounded-full bg-purple-500 hover:ring-2 ring-purple-400 ring-offset-2 ring-offset-[#1A1F2E] transition-all"></span>
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap">Purple</span>
                        </button>
                        <button className="group relative w-10 h-10">
                          <span className="absolute inset-0 rounded-full bg-green-500 hover:ring-2 ring-green-400 ring-offset-2 ring-offset-[#1A1F2E] transition-all"></span>
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap">Green</span>
                        </button>
                        <button className="group relative w-10 h-10">
                          <span className="absolute inset-0 rounded-full bg-red-500 hover:ring-2 ring-red-400 ring-offset-2 ring-offset-[#1A1F2E] transition-all"></span>
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap">Red</span>
                        </button>
                      </div>
                    </div>

                    {/* Background Colors */}
                    <div>
                      <p className="text-xs text-gray-400 mb-2">Background Colors</p>
                      <div className="grid grid-cols-6 gap-3">
                        <button className="group relative w-10 h-10">
                          <span className="absolute inset-0 rounded-full bg-[#0B0F19] border border-gray-700 hover:ring-2 ring-gray-600 ring-offset-2 ring-offset-[#1A1F2E] transition-all"></span>
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap">Dark</span>
                        </button>
                        <button className="group relative w-10 h-10">
                          <span className="absolute inset-0 rounded-full bg-[#151923] border border-gray-700 hover:ring-2 ring-gray-600 ring-offset-2 ring-offset-[#1A1F2E] transition-all"></span>
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap">Medium</span>
                        </button>
                        <button className="group relative w-10 h-10">
                          <span className="absolute inset-0 rounded-full bg-[#1A1F2E] border border-gray-700 hover:ring-2 ring-gray-600 ring-offset-2 ring-offset-[#1A1F2E] transition-all"></span>
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap">Light</span>
                        </button>
                      </div>
                    </div>

                    {/* Custom Color */}
                    <div>
                      <p className="text-xs text-gray-400 mb-2">Custom Color</p>
                      <div className="flex items-center space-x-3">
                        <input 
                          type="color" 
                          className="h-10 w-10 rounded-lg bg-[#1A1F2E] border border-gray-700 cursor-pointer"
                          defaultValue="#3B82F6"
                        />
                        <input 
                          type="text" 
                          placeholder="#3B82F6"
                          className="flex-1 p-2 bg-[#1A1F2E] border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Logo</label>
                  <button className="w-full bg-[#1A1F2E] text-gray-400 p-3 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors flex items-center justify-center">
                    <i className="fas fa-upload mr-2"></i>
                    Upload Logo
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-400">Show Progress Bar</label>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-[#1A1F2E] border border-gray-800">
                    <input type="checkbox" className="sr-only peer" />
                    <span className="absolute inset-0 peer-checked:bg-blue-500 rounded-full transition-colors"></span>
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></span>
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

export default CreateForm;