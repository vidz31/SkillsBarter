import React from "react";
import { User } from "lucide-react";
import profile_img from "../assets/profile_img.png";

const matches = [
  {
    name: "Alice Johnson",
    skills: "Web Development, UI/UX",
    offer: "Can help with React, Figma",
    need: "Looking for Python, Data Science",
  avatar: profile_img,
  },
  {
    name: "Bob Williams",
    skills: "Graphic Design, Branding",
    offer: "Can help with Photoshop, Illustrator",
    need: "Looking for Marketing, SEO",
  avatar: profile_img,
  },
  {
    name: "Charlie Green",
    skills: "Content Writing, Blogging",
    offer: "Can help with SEO, Copywriting",
    need: "Looking for Video Editing, Animation",
  avatar: profile_img,
  },
  {
    name: "Diana Smith",
    skills: "Digital Marketing, Ads",
    offer: "Can help with Google Ads, Analytics",
    need: "Looking for Web Development, Design",
  avatar: profile_img,
  },
  {
    name: "Ben Brown",
    skills: "Python, Data Science",
    offer: "Can help with Pandas, ML",
    need: "Looking for UI/UX, Branding",
  avatar: profile_img,
  },
];

const DashboardMatches = () => (
  <section className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <h2 className="font-bold text-lg">Suggested Barter Matches</h2>
      <a href="#" className="text-[#190a64] text-sm underline">
        View all
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {matches.map((match, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 hover:shadow-lg transition"
        >
          {/* Profile section */}
          <div className="flex items-center gap-3 mb-2">
            {match.avatar ? (
              <img
                src={match.avatar}
                // alt={match.name}
                className="w-12 h-12 rounded-full object-cover border"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="text-gray-500" />
              </div>
            )}
            <div>
              <div className="font-bold text-gray-900 text-base">{match.name}</div>
              <div className="text-gray-500 text-xs">{match.skills}</div>
            </div>
          </div>

          {/* Details */}
          <div className="text-gray-600 text-xs">
            <span className="font-semibold">Offer:</span> {match.offer}
          </div>
          <div className="text-gray-600 text-xs mb-2">
            <span className="font-semibold">Need:</span> {match.need}
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
      ))}
    </div>
  </section>
);

export default DashboardMatches;
