import React from "react";

const badges = [
  { title: "Top Contributor", desc: "Most helpful in skill exchanges.", icon: "4aa" },
  { title: "Barter King", desc: "Completed 50+ skill exchanges.", icon: "451" },
  { title: "Innovation Master", desc: "Recognized for creative problem-solving.", icon: "4a1" },
  { title: "Skill Sharer", desc: "Shared knowledge in 5+ group barters.", icon: "465" },
];

const ProfileBadges = () => (
  <div className="bg-white rounded-xl shadow p-6 mb-6">
    <div className="font-bold text-lg mb-4">Badges & Achievements</div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {badges.map((badge, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <span className="text-3xl mb-2">{badge.icon}</span>
          <div className="font-semibold text-gray-800">{badge.title}</div>
          <div className="text-xs text-gray-500">{badge.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ProfileBadges;
