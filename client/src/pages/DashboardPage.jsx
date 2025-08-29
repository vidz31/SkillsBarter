import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";
import DashboardWallet from "../components/DashboardWallet";
import DashboardQuickActions from "../components/DashboardQuickActions";
import DashboardCredibility from "../components/DashboardCredibility";
import DashboardMatches from "../components/DashboardMatches";
import DashboardNotifications from "../components/DashboardNotifications";

const DashboardPage = () => {
  const location = useLocation();
  // Show dashboard widgets only on /dashboard root, otherwise render nested route
  const isDashboardRoot = location.pathname === "/dashboard";
  return (
    <div className="bg-[#f5f5fa] min-h-screen flex flex-col" style={{ paddingTop: '4rem' }}>
      <div className="flex flex-1 min-h-0">
        <div>
          <AppSidebar fullHeight={false} />
        </div>
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
    </div>
  );
};

export default DashboardPage;
