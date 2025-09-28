import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import AppSidebar from "../components/AppSidebar";
import DashboardWallet from "../components/DashboardWallet";
import DashboardQuickActions from "../components/DashboardQuickActions";
import DashboardCredibility from "../components/DashboardCredibility";
import DashboardMatches from "../components/DashboardMatches";
import DashboardNotifications from "../components/DashboardNotifications";
import Footer from "../components/Footer";


const DashboardPage = () => {
  const { user, setUser, token, backendUrl, setLoading, setError, setWallet, setNotifications, setCredibility, setMatches, loading } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();

  const hasFetchedRef = React.useRef(false);

  React.useEffect(() => {
    // If user is undefined (still loading initial context), do nothing
    if (typeof user === 'undefined') return;
    // If user is null (not logged in), redirect
    if (!user) {
      navigate("/login");
      return;
    }
    // Fetch once per session when user id becomes available
    if (!hasFetchedRef.current && user._id) {
      hasFetchedRef.current = true;
      const fetchDashboard = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(`${backendUrl}/api/dashboard/${user._id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await res.json();
          if (data.success && data.user) {
            if (data.wallet) setWallet(data.wallet);
            if (data.notifications) setNotifications(data.notifications);
            if (typeof data.credibility === 'number') setCredibility(data.credibility);
            if (data.matches) setMatches(data.matches);
          } else {
            setError(data.message || "Failed to load dashboard data");
          }
        } catch (err) {
          setError("Dashboard fetch error");
        } finally {
          setLoading(false);
        }
      };
      fetchDashboard();
    }
  }, [user?._id, token, backendUrl, navigate]);

  const isDashboardRoot = location.pathname === "/dashboard";
  return (
    <div className="bg-[#f5f5fa] min-h-screen flex flex-col" style={{ paddingTop: '4.5rem' }}>
      <div className="flex flex-1 min-h-0">
        {/* Fixed sidebar + layout spacer to prevent content shifting */}
        <AppSidebar fullHeight={true} />
        <div className="w-64 flex-none" />
        <main className="flex-1 px-4 md:px-8 py-6 space-y-8">
          {isDashboardRoot ? (
            <>
              {/* Top Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DashboardWallet />
                <DashboardQuickActions />
                <DashboardCredibility />
              </div>
              {/* Suggested Barter Matches */}
              <DashboardMatches />
              <DashboardNotifications />
            </>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
      {/* Footer aligned with content (to the right of the fixed sidebar) */}
      <div className="pl-64">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
