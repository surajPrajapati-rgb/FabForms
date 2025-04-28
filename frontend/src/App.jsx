import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup-login" element={<SignupLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form-testing" element={<FormTesting />} />
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/publish-form" element={<PublishForm />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/customer-survey" element={<CustomerSurvey />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/help-support" element={<HelpSupport />} />
      </Routes>
    </Router>
  );
};

export default App;
