
import React from "react";
import { useAppContext } from "../context/AppContext";

const SkillOfferedList = () => {
  const { user } = useAppContext();
  const skills = user?.skillsOffered || [];
  return (
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
          {skills.length > 0 ? (
            skills.map((skill, idx) => (
              <tr key={idx}>
                <td className="py-2">{skill.name}</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">{skill.proficiency || "-"}</span>
                </td>
                <td>{skill.category || "-"}</td>
                <td>
                  <span className={
                    skill.status === "Available"
                      ? "bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                      : "bg-red-100 text-red-800 px-2 py-1 rounded text-xs"
                  }>
                    {skill.status || "-"}
                  </span>
                </td>
                <td>
                  <button className="text-red-500 hover:underline">🗑</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-gray-400 text-center py-4">No offered skills yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SkillOfferedList;
