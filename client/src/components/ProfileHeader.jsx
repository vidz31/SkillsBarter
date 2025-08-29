import React from "react";
import profile_img from "../assets/profile_img.png";

const ProfileHeader = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white rounded-xl shadow p-6 mb-6">
    <img src={profile_img} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow" />
    <div className="flex-1">
      <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
        <div>
          <h2 className="font-bold text-2xl text-gray-900">Alex Johnson</h2>
          <div className="text-gray-500 text-sm">UI/UX Designer &bull; San Francisco, CA</div>
        </div>
        <div className="flex flex-col md:items-end">
          <span className="text-xs text-blue-600 font-semibold">Credibility Score</span>
          <span className="text-lg font-bold text-blue-700">4.7 <span className="text-xs text-gray-400">/ 5</span></span>
          <span className="text-xs text-green-600">Top 10%</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold">Edit Profile</button>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
