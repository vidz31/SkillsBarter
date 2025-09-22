import React from "react";
import { Layers, MessageSquare, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardQuickActions = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
    <div className="font-bold text-xl mb-2">Quick Actions</div>

    <Link
      to="skill-management"
      className="flex items-center gap-3 bg-[#6d66af]/10 text-[#190a64] rounded-xl py-3 px-5 font-medium hover:bg-[#190a94]/10 transition-all shadow-md cursor-pointer"
      relative="path"
    >
      <Layers size={20} />
      Skill Management
    </Link>

    <Link
      to="my-barters"
      className="flex items-center gap-3 bg-[#6d66af]/10 text-[#190a64] rounded-xl py-3 px-5 font-medium hover:bg-[#190a94]/10 transition-all shadow-md cursor-pointer"
      relative="path"
    >
      <MessageSquare size={20} />
      My Barters
    </Link>

    <Link
      to="settings"
      className="flex items-center gap-3 bg-[#6d66af]/10 text-[#190a64] rounded-xl py-3 px-5 font-medium hover:bg-[#190a94]/10 transition-all shadow-md cursor-pointer"
      relative="path"
    >
      <Settings size={20} />
      Settings
    </Link>
  </div>
);

export default DashboardQuickActions;
