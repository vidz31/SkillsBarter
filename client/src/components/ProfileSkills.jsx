import React from "react";

const offered = [
  "UI Design", "UX Research", "Figma", "Prototyping", "Wireframing", "User Interviews", "Usability Testing", "HTML/CSS Basics"
];
const needed = [
  "JavaScript (Advanced)", "React Development", "Backend Development", "Project Management", "Digital Marketing"
];

const ProfileSkills = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div className="bg-white rounded-xl shadow p-6">
      <div className="font-bold text-lg mb-2">Skills Offered</div>
      <div className="flex flex-wrap gap-2 mb-4">
        {offered.map((skill, idx) => (
          <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">{skill}</span>
        ))}
      </div>
      <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold">Edit Skills</button>
    </div>
    <div className="bg-white rounded-xl shadow p-6">
      <div className="font-bold text-lg mb-2">Skills Needed</div>
      <div className="flex flex-wrap gap-2 mb-4">
        {needed.map((skill, idx) => (
          <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">{skill}</span>
        ))}
      </div>
      <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold">Edit Skills</button>
    </div>
  </div>
);

export default ProfileSkills;
