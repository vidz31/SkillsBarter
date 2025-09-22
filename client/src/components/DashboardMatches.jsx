import React from "react";
import { User } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const DashboardMatches = () => {
  const { matches } = useAppContext();
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg">Suggested Barter Matches</h2>
        <a href="#" className="text-[#190a64] text-sm underline">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {matches && matches.length > 0 ? matches.map((match, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 hover:shadow-lg transition"
          >
            {/* Profile section */}
            <div className="flex items-center gap-3 mb-2">
              {match.profileImage ? (
                <img
                  src={match.profileImage}
                  alt={match.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="text-gray-500" />
                </div>
              )}
              <div>
                <div className="font-bold text-gray-900 text-base">{match.name}</div>
                <div className="text-gray-500 text-xs">
                  {Array.isArray(match.skillsOffered) && match.skillsOffered.length > 0
                    ? match.skillsOffered.map(s => s.name).join(", ")
                    : "No skills listed"}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="text-gray-600 text-xs">
              <span className="font-semibold">Offer:</span> {Array.isArray(match.skillsOffered) && match.skillsOffered.length > 0 ? match.skillsOffered.map(s => s.name).join(", ") : "-"}
            </div>
            <div className="text-gray-600 text-xs mb-2">
              <span className="font-semibold">Need:</span> {Array.isArray(match.skillsNeeded) && match.skillsNeeded.length > 0 ? match.skillsNeeded.map(s => s.name).join(", ") : "-"}
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-auto">
              <button className="bg-[#190a64] text-white rounded-lg px-3 py-1 text-sm font-semibold hover:bg-[#190a94] transition">
                Connect
              </button>
              <button className="bg-[#6d66af]/10 text-[#190a64] rounded-lg px-3 py-1 text-sm font-semibold hover:bg-[#190a94]/10 transition">
                Request Barter
              </button>
            </div>
          </div>
        )) : <div className="text-gray-400 text-sm">No matches found.</div>}
      </div>
    </section>
  );
};

export default DashboardMatches;
