import React from "react";
import { CreditCard } from "lucide-react";

const DashboardWallet = () => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
    {/* Header */}
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-[#6d66af]/10 p-2 rounded-xl">
        <CreditCard className="w-6 h-6 text-[#190a64]" />
      </div>
      <span className="font-bold text-xl text-gray-800">Skill Wallet</span>
    </div>

    {/* Balance */}
    <div>
      <div className="text-4xl font-extrabold text-gray-900 tracking-tight">1250</div>
      <div className="text-gray-500 text-sm">Credits available</div>
    </div>

    {/* Link */}
    <a
      href="#"
      className="mt-4 inline-block text-sm font-medium text-[#190a64] hover:text-[#190a94] transition-colors"
    >
      Learn more about Skills →
    </a>
  </div>
);

export default DashboardWallet;
