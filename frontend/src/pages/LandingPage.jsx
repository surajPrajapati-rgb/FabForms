import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white w-full">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-[#151923] w-full">
        <div className="w-full px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-500 flex items-center">
                <i className="fas fa-cube mr-2"></i>
                FabForms
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <Link to="/signup-login" className="bg-white text-[#0B0F19] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="w-full px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create Beautiful Forms with
              <span className="text-blue-500"> AI-Powered</span> Tools
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-3xl mx-auto">
              Design, publish, and analyze forms in minutes. Get actionable insights from your responses with our intelligent analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup-login" className="bg-white text-[#0B0F19] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Get Started Free
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link to="/" className="bg-white text-[#0B0F19] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Watch Demo
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#151923] w-full">
        <div className="w-full px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400">Everything you need to create and manage forms effectively</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-magic',
                title: 'AI Form Generation',
                description: 'Create forms instantly using AI-powered suggestions and templates'
              },
              {
                icon: 'fas fa-chart-line',
                title: 'Smart Analytics',
                description: 'Get detailed insights and visualizations from your form responses'
              },
              {
                icon: 'fas fa-paint-brush',
                title: 'Custom Themes',
                description: 'Customize your forms with beautiful themes and branding options'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1F2E] p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-all">
                <div className="bg-blue-500 bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-blue-500 text-xl`}></i>
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 w-full">
        <div className="w-full px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400">Choose the plan that's right for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                features: ['3 forms', 'Basic analytics', 'Email support', 'Limited storage']
              },
              {
                name: 'Pro',
                price: '$29',
                features: ['Unlimited forms', 'Advanced analytics', 'Priority support', 'Custom branding']
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: ['Everything in Pro', 'Custom integrations', 'Dedicated support', 'SLA guarantee']
              }
            ].map((plan, index) => (
              <div key={index} className="bg-[#151923] p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <i className="fas fa-check text-blue-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/signup-login"
                  className={`w-full flex justify-center py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                    index === 1 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-white text-[#0B0F19] hover:bg-gray-100'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151923] border-t border-gray-800 w-full">
        <div className="w-full px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="text-2xl font-bold text-blue-500 flex items-center">
                <i className="fas fa-cube mr-2"></i>
                FabForms
              </Link>
              <p className="text-gray-400 mt-2">Create beautiful forms with AI</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/help-support" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FabForms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;