import React from "react";
import { useAppContext } from "../context/AppContext";

const ProfileSkills = () => {
  const { user } = useAppContext();
  const offered = user?.skillsOffered || [];
  const needed = user?.skillsNeeded || [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="font-bold text-lg mb-2">Skills Offered</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {offered.length > 0 ? offered.map((skill, idx) => (
            <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">{typeof skill === 'string' ? skill : skill.name}</span>
          )) : <span className="text-gray-400">No skills listed</span>}
        </div>
        <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold">Edit Skills</button>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="font-bold text-lg mb-2">Skills Needed</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {needed.length > 0 ? needed.map((skill, idx) => (
            <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">{typeof skill === 'string' ? skill : skill.name}</span>
          )) : <span className="text-gray-400">No skills listed</span>}
        </div>
        <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold">Edit Skills</button>
      </div>
    </div>
  );
};

export default ProfileSkills;
