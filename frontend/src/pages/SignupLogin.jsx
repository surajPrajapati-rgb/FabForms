import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleGoogleAuth = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f36] to-[#2d3349] flex flex-col items-center">
      <nav className="w-full p-4 flex justify-between items-center bg-white/10 backdrop-blur-sm">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <i className="fas fa-cube text-blue-400 mr-2"></i>
          FabForms
        </Link>
        <div className="space-x-4">
          <Link to="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link to="#support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
        </div>
      </nav>
      
      <div className="flex-1 flex items-center justify-center p-6 w-full max-w-4xl">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1a1f36] mb-2">
              {isLogin ? 'Welcome Back!' : 'Join FabForms Today'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? 'Log in to your account' : 'Create forms effortlessly with AI'}
            </p>
          </div>
          
          <div className="flex justify-between mb-6 bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                isLogin ? 'bg-white shadow-sm text-[#1a1f36]' : 'text-gray-600'
              }`}
            >
              Log In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                !isLogin ? 'bg-white shadow-sm text-[#1a1f36]' : 'text-gray-600'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isLogin ? 'Password' : 'Create Password'}
              </label>
              <input 
                type="password" 
                placeholder={isLogin ? "Enter your password" : "Create a password"} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                  <option value="">Select your role</option>
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            )}
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
            
            <button 
              type="button"
              onClick={handleGoogleAuth}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center shadow-sm"
            >
              <i className="fab fa-google mr-2 text-red-500"></i>
              {isLogin ? 'Log in with Google' : 'Sign up with Google'}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;