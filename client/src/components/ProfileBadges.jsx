import React from "react";
import { useAppContext } from "../context/AppContext";

const ProfileBadges = () => {
  const { badges } = useAppContext();
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <div className="font-bold text-lg mb-4">Badges & Achievements</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {badges && badges.length > 0 ? (
          badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">{badge.icon || "🏅"}</span>
              <div className="font-semibold text-gray-800">{badge.title}</div>
              <div className="text-xs text-gray-500">{badge.desc}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 col-span-4">No badges yet.</div>
        )}
      </div>
    </div>
  );
};

export default ProfileBadges;
