import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-xl font-bold">FabForms</div>
        <div className="space-x-4">
          <a href="#features" className="text-gray-700">Features</a>
          <a href="#solutions" className="text-gray-700">Solutions</a>
          <a href="#pricing" className="text-gray-700">Pricing</a>
          <a href="#support" className="text-gray-700">Support</a>
          <a href="#login" className="text-gray-700">Log in</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
        </div>
      </nav>
      <div className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Revolutionize Form Creation with AI</h1>
          <p className="mb-4">Create engaging forms using natural language prompts</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started →</button>
        </div>
        <div>
          <img src="https://via.placeholder.com/400x300" alt="Dashboard" className="rounded shadow" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Powerful Features</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            <i className="fas fa-bolt text-green-500 text-2xl mb-2"></i>
            <h3 className="font-bold">AI-Powered Creation</h3>
            <p>Create forms instantly using natural language prompts and AI assistance</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <i className="fas fa-chart-line text-green-500 text-2xl mb-2"></i>
            <h3 className="font-bold">Analytics</h3>
            <p>Get detailed insights and analytics from your form responses</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <i className="fas fa-comments text-green-500 text-2xl mb-2"></i>
            <h3 className="font-bold">Conversational Forms</h3>
            <p>Create interactive and engaging forms that feel like natural conversations</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold mb-4">Ready to create your first form?</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started Free →</button>
        </div>
      </div>
      <footer className="p-6 bg-gray-100 mt-6">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h4 className="font-bold">Product</h4>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Resources</h4>
            <ul className="space-y-2">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4">© 2025 FabForms. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;