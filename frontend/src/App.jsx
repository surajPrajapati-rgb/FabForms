import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FormTesting from './pages/FormTesting';
import CreateForm from './pages/CreateForm';
import PublishForm from './pages/PublishForm';
import Analytics from './pages/Analytics';
import CustomerSurvey from './pages/CustomerSurvey';
import ProfileSettings from './pages/ProfileSettings';
import HelpSupport from './pages/HelpSupport';
import LandingPage from './pages/LandingPage';
import SignupLogin from './pages/SignupLogin';
import { Sidebar } from './pages/Sidebar';

// Temporary auth check - always returns true for development
const isAuthenticated = () => {
  return true; // Always return true for now
};

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/signup-login" replace />;
  }
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup-login" element={<SignupLogin />} />
        <Route path="/customer-survey" element={<CustomerSurvey />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/create-form" element={
          <ProtectedRoute>
            <CreateForm />
          </ProtectedRoute>
        } />
        <Route path="/form-testing" element={
          <ProtectedRoute>
            <FormTesting />
          </ProtectedRoute>
        } />
        <Route path="/publish-form" element={
          <ProtectedRoute>
            <PublishForm />
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path="/profile-settings" element={
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        } />
        <Route path="/help-support" element={
          <ProtectedRoute>
            <HelpSupport />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;
