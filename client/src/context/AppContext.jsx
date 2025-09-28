import React, { createContext, useContext, useState, useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// ⬅️ Export AppContext as a named export
export const AppContext = createContext();

// Custom hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// Provider
export const AppProvider = ({ children }) => {
  // Restore user and token from localStorage if present
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsNeeded, setSkillsNeeded] = useState([]);
  const [badges, setBadges] = useState([]);
  const [wallet, setWallet] = useState({ credits: 0, transactions: [] });
  const [exchangePreferences, setExchangePreferences] = useState({});
  const [credibility, setCredibility] = useState(0);
  const [matches, setMatches] = useState([]);

  // Add logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Keep user and token in sync with localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        // Always use user from state (restored from localStorage on mount)
        if (!user || !user._id) {
          setError('No user ID found. Please log in again.');
          setLoading(false);
          return;
        }
        const userId = user._id;
        const userRes = await fetch(`${BACKEND_URL}/api/user/profile/${userId}`, { headers });
        if (userRes.ok) {
          const userData = await userRes.json();
          setUser(userData.user ? userData.user : userData);
          setSkillsOffered((userData.user ? userData.user : userData).skillsOffered || []);
          setSkillsNeeded((userData.user ? userData.user : userData).skillsNeeded || []);
        } else {
          setError('Failed to fetch user profile.');
        }
        // Only fetch other data if user is loaded
        const notifRes = await fetch(`${BACKEND_URL}/api/notification/user/${userId}`, { headers });
        if (notifRes.ok) setNotifications(await notifRes.json());
        const badgeRes = await fetch(`${BACKEND_URL}/api/badge/all`, { headers });
        if (badgeRes.ok) setBadges(await badgeRes.json());
        const walletRes = await fetch(`${BACKEND_URL}/api/wallet/${userId}`, { headers });
        if (walletRes.ok) setWallet(await walletRes.json());
        const prefRes = await fetch(`${BACKEND_URL}/api/exchange-preference/${userId}`, { headers });
        if (prefRes.ok) setExchangePreferences(await prefRes.json());
      } catch (err) {
        setError("Failed to fetch data from server.");
      } finally {
        setLoading(false);
      }
    };
    if (token && user && user._id) fetchData();
  }, [token, user]);

  return (
    <AppContext.Provider
      value={{
        user, setUser,
        token, setToken,
        loading, setLoading,
        error, setError,
        notifications, setNotifications,
        skillsOffered, setSkillsOffered,
        skillsNeeded, setSkillsNeeded,
        badges, setBadges,
        wallet, setWallet,
        exchangePreferences, setExchangePreferences,
        backendUrl: BACKEND_URL,
        credibility, setCredibility,
        matches, setMatches,
        logout, // <-- provided here
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;