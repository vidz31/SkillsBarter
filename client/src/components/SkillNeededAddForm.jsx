import React from "react";

const SkillNeededAddForm = () => (
  <details className="mb-4">
    <summary className="cursor-pointer font-semibold text-lg text-[#190a64] mb-2">Add New Needed Skill</summary>
    <form className="flex flex-wrap gap-4 mt-2">
      <input className="border rounded px-3 py-2 text-sm w-40" placeholder="Skill/Area" />
      <select className="border rounded px-3 py-2 text-sm w-32">
        <option>Proficiency</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <input className="border rounded px-3 py-2 text-sm w-32" placeholder="Category" />
      <button type="submit" className="bg-[#190a64] text-white px-4 py-2 rounded text-sm font-semibold">Add</button>
    </form>
  </details>
);

export default SkillNeededAddForm;
