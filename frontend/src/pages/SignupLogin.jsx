import React from 'react';

const SignupLogin = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <nav className="p-4 flex justify-between w-full">
        <div className="text-xl font-bold">FabForms</div>
        <div className="space-x-4">
          <a href="#pricing" className="text-gray-700">Pricing</a>
          <a href="#support" className="text-gray-700">Support</a>
          <a href="#login" className="text-gray-700">Log in</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
        </div>
      </nav>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Join FabForms Today</h1>
        <p className="mb-4">Create forms effortlessly with AI</p>
        <div className="bg-white p-6 rounded shadow max-w-md">
          <div className="flex justify-between mb-4">
            <button className="border border-gray-300 px-4 py-2 rounded w-1/2 mr-2">Sign Up</button>
            <button className="border border-gray-300 px-4 py-2 rounded w-1/2">Log In</button>
          </div>
          <form className="space-y-4">
            <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded" />
            <input type="password" placeholder="Create a password" className="w-full p-2 border rounded" />
            <select className="w-full p-2 border rounded">
              <option>Select your role</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded w-full flex items-center justify-center">
              <i className="fab fa-google mr-2"></i> Sign up with Google
            </button>
            <p className="text-center text-gray-500">Already have an account? <a href="#login" className="text-blue-600">Log in</a></p>
          </form>
        </div>
        <footer className="mt-6 text-center text-gray-500">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h4 className="font-bold">Product</h4>
              <ul className="space-y-2">
                <li>Features</li>
                <li>Solutions</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Company</h4>
              <ul className="space-y-2">
                <li>About</li>
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
          <p className="mt-4">© 2025 FabForms. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SignupLogin;