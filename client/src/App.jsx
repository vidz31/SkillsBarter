import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import FAQContactPage from './pages/FAQContactPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import SkillsPage from './pages/SkillsPage';
import MatchesPage from './pages/MatchesPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<FAQContactPage />} />
        <Route path="/faq" element={<FAQContactPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard + Nested Routes */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="skill-management" element={<SkillsPage />} />
          <Route path="matches" element={<MatchesPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
