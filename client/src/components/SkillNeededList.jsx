import React from "react";

const SkillNeededList = () => (
  <div>
    <h2 className="font-bold text-2xl mb-2">My Needed Skills</h2>
    <table className="w-full text-sm mb-2">
      <thead>
        <tr className="text-gray-500">
          <th className="text-left py-2">Skill/Area</th>
          <th className="text-left py-2">Proficiency</th>
          <th className="text-left py-2">Category</th>
          <th className="text-left py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2">Video Editing</td>
          <td><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Beginner</span></td>
          <td>Arts</td>
          <td><button className="text-red-500 hover:underline">🗑</button></td>
        </tr>
        <tr>
          <td className="py-2">Digital Marketing Strategy</td>
          <td><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Intermediate</span></td>
          <td>Marketing</td>
          <td><button className="text-red-500 hover:underline">🗑</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SkillNeededList;
