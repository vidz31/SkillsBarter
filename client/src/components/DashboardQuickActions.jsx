import React from "react";
import { Settings, Search, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardQuickActions = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
    <div className="font-bold text-xl mb-2">Quick Actions</div>

    <Link
      to="/manage-skills"
      className="flex items-center gap-3 bg-[#6d66af]/10 text-[#190a64] rounded-xl py-3 px-5 font-medium hover:bg-[#190a94]/10 transition-all shadow-md cursor-pointer"
    >
      <Settings size={20} />
      Manage My Skills
    </Link>

    <Link
      to="/request-match"
      className="flex items-center gap-3 bg-[#6d66af]/10 text-[#190a64] rounded-xl py-3 px-5 font-medium hover:bg-[#190a94]/10 transition-all shadow-md cursor-pointer"
    >
      <Search size={20} />
      Request New Match
    </Link>

    <Link
      to="/use-barter"
      className="flex items-center gap-3 bg-[#6d66af]/10 text-[#190a64] rounded-xl py-3 px-5 font-medium hover:bg-[#190a94]/10 transition-all shadow-md cursor-pointer"
    >
      <RefreshCw size={20} />
      Use My Barter
    </Link>
  </div>
);

export default DashboardQuickActions;
