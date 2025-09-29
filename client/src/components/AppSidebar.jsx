import React from "react";
import { LayoutDashboard, User, Search, Layers, MessageSquare, Star, Trophy, Users, Settings, LogOut } from "lucide-react";

import { Link } from "react-router-dom";
const menu = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", to: "/dashboard" },
  { icon: <User size={20} />, label: "Profile", to: "/dashboard/profile" },
  { icon: <Search size={20} />, label: "Explore Skills", to: "/dashboard/explore-skills" },
  { icon: <Layers size={20} />, label: "Skill Management", to: "/dashboard/skill-management" },
  { icon: <MessageSquare size={20} />, label: "My Barters", to: "/dashboard/my-barters" },
  { icon: <Star size={20} />, label: "Reviews", to: "/dashboard/reviews" },
  { icon: <Trophy size={20} />, label: "Leaderboard", to: "/dashboard/leaderboard" },
  { icon: <Users size={20} />, label: "Group Barters", to: "/dashboard/group-barters" },
  { icon: <Settings size={20} />, label: "Settings", to: "/dashboard/settings" },
];


const AppSidebar = ({ fullHeight = true }) => (
  <aside
    className={
      fullHeight
        ? "bg-white w-64 h-screen fixed top-16 left-0 border-r border-gray-200 flex flex-col py-8 px-4 z-30"
        : "bg-white w-64 h-full border-r border-gray-200 flex flex-col py-8 px-4 z-30"
    }
    style={fullHeight ? { height: "calc(100vh - 64px)", overflow: "hidden" } : {}}
  >
    <nav>
      <ul className="space-y-2">
        {menu.map((item, idx) => (
          <li key={idx}>
            <Link to={item.to} className="flex items-center gap-3 w-full py-2 px-3 rounded-lg text-gray-700 hover:bg-[#e6f7fa] transition">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="mt-auto pt-8">
      <LogoutButton />
    </div>
  </aside>
);


// Add LogoutButton as a separate component to use context
import { useAppContext } from "../context/AppContext";
const LogoutButton = () => {
  const { logout } = useAppContext();
  return (
    <button className="flex items-center gap-2 text-gray-500 hover:text-primary" onClick={logout}>
      <LogOut size={18} />
      <span>Log Out</span>
    </button>
  );
};

export default AppSidebar;
