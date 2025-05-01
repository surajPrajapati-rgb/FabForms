import React from 'react';

const HelpSupport = () => {
  return (
    <div className="flex-1 bg-[#0B0F19] min-h-screen text-white p-8">
      <div>
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-medium text-white">Help & Support</h2>
          <p className="text-gray-400 mt-1">Find answers to common questions or reach out to our support team</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="col-span-9 space-y-6">
            {/* FAQ Section */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Frequently Asked Questions</h3>
              <select className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white">
                <option className="bg-[#1A1F2E]">How do I create a form?</option>
                <option className="bg-[#1A1F2E]">How to share forms with my team?</option>
                <option className="bg-[#1A1F2E]">Can I export form responses?</option>
              </select>
            </div>

            {/* Contact Support */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Contact Support</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
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
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea 
                    placeholder="Describe your issue or question" 
                    className="w-full p-3 bg-[#1A1F2E] border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-500 min-h-[120px]"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-[#0B0F19] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Additional Resources */}
          <div className="col-span-3 space-y-6">
            {/* Video Tutorials */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Video Tutorials</h3>
              <div className="space-y-4">
                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-play-circle text-blue-500 text-xl"></i>
                  </div>
                  <h4 className="text-white font-medium mb-2">Getting Started</h4>
                  <p className="text-gray-400 text-sm mb-4">Learn the basics of form creation</p>
                  <button className="w-full bg-white text-[#0B0F19] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Watch Tutorial
                  </button>
                </div>

                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
                  <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-star text-purple-500 text-xl"></i>
                  </div>
                  <h4 className="text-white font-medium mb-2">Advanced Features</h4>
                  <p className="text-gray-400 text-sm mb-4">Master advanced form capabilities</p>
                  <button className="w-full bg-white text-[#0B0F19] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Watch Tutorial
                  </button>
                </div>

                <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
                  <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-tools text-green-500 text-xl"></i>
                  </div>
                  <h4 className="text-white font-medium mb-2">Troubleshooting</h4>
                  <p className="text-gray-400 text-sm mb-4">Solve common issues</p>
                  <button className="w-full bg-white text-[#0B0F19] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Watch Tutorial
                  </button>
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Community</h3>
              <a href="#" className="flex items-center justify-between p-4 bg-[#1A1F2E] rounded-lg border border-gray-800 hover:border-blue-500 transition-colors group">
                <div className="flex items-center">
                  <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-4">
                    <i className="fas fa-users text-blue-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Join our community forum</h4>
                    <p className="text-gray-400 text-sm">Connect with other form creators</p>
                  </div>
                </div>
                <i className="fas fa-arrow-right text-gray-400 group-hover:text-blue-500 transition-colors"></i>
              </a>
            </div>

            {/* Quick Links */}
            <div className="bg-[#151923] rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <i className="fas fa-book mr-3"></i>
                  Documentation
                </a>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <i className="fas fa-file-alt mr-3"></i>
                  API Reference
                </a>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <i className="fas fa-question-circle mr-3"></i>
                  Knowledge Base
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;