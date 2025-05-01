import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: 'fas fa-home', label: 'Dashboard' },
    { path: '/create-form', icon: 'fas fa-plus-circle', label: 'Create Form' },
    { path: '/form-testing', icon: 'fas fa-vial', label: 'Form Testing' },
    { path: '/analytics', icon: 'fas fa-chart-line', label: 'Analytics' },
    { path: '/help-support', icon: 'fas fa-question-circle', label: 'Help & Support' },
    { path: '/profile-settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#0B0F19] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link to="/dashboard" className="text-2xl font-bold text-blue-500 flex items-center">
          <i className="fas fa-cube mr-2"></i>
          FabForms
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-500 bg-opacity-20 !text-white font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <i className={`${item.icon} w-5 text-center mr-3 ${
                    isActive ? 'text-blue-500' : ''
                  }`}></i>
                  <span className={isActive ? 'text-white' : ''}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-800">
        <Link
          to="/"
          className="flex items-center px-4 py-3 rounded-lg text-gray-400 hover:text-white transition-colors"
        >
          <i className="fas fa-sign-out-alt w-5 text-center mr-3"></i>
          Log Out
        </Link>
      </div>
    </div>
  );
};