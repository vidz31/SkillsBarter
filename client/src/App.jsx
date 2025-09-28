import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes, useLocation, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import FAQContactPage from './pages/FAQContactPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ManageSkillsPage from './pages/ManageSkillsPage';
import RequestMatchPage from './pages/RequestMatchPage';
import UseBarterPage from './pages/UseBarterPage';
import ProfilePage from './pages/ProfilePage';
import SkillsPage from './pages/SkillsPage';
import MatchesPage from './pages/MatchesPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import ExploreSkillsPage from './pages/ExploreSkillsPage';
import { AppContext } from './context/AppContext';

// 404 Not Found Component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f5f5fa]">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="bg-[#190a64] text-white px-6 py-3 rounded-lg hover:bg-[#190a54] transition"
      >
        Go Home
      </a>
    </div>
  </div>
);

const RequireAuth = ({ children }) => {
  const { user, token } = useContext(AppContext);
  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const AppLayout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  return (
  <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<FAQContactPage />} />
            <Route path="/faq" element={<FAQContactPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Dashboard + Nested Routes (ensures sidebar layout on all dashboard pages) */}
            <Route path="/dashboard/*" element={<DashboardPage />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="explore-skills" element={<ExploreSkillsPage />} />
              <Route path="manage-skills" element={<ManageSkillsPage />} />
              <Route path="skill-management" element={<SkillsPage />} />
              <Route path="request-match" element={<RequestMatchPage />} />
              <Route path="use-barter" element={<UseBarterPage />} />
              <Route path="matches" element={<MatchesPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

            {/* Standalone Routes */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/skill-management" element={<SkillsPage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
  {!isDashboard && <Footer />}
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

const App = () => (
  <Router>
    <AppLayout />
  </Router>
)

export default App
