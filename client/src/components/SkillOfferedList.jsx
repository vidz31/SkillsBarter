import React from "react";

const SkillOfferedList = () => (
  <div>
    <h2 className="font-bold text-2xl mb-2">My Offered Skills</h2>
    <table className="w-full text-sm mb-2">
      <thead>
        <tr className="text-gray-500">
          <th className="text-left py-2">Skill/Area</th>
          <th className="text-left py-2">Proficiency</th>
          <th className="text-left py-2">Category</th>
          <th className="text-left py-2">Status</th>
          <th className="text-left py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2">UI/UX Design</td>
          <td><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Intermediate</span></td>
          <td>Design</td>
          <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Available</span></td>
          <td><button className="text-red-500 hover:underline">🗑</button></td>
        </tr>
        <tr>
          <td className="py-2">React Development</td>
          <td><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Intermediate</span></td>
          <td>Development</td>
          <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Available</span></td>
          <td><button className="text-red-500 hover:underline">🗑</button></td>
        </tr>
        <tr>
          <td className="py-2">Content Writing</td>
          <td><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Advanced</span></td>
          <td>Writing</td>
          <td><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Unavailable</span></td>
          <td><button className="text-red-500 hover:underline">🗑</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SkillOfferedList;
