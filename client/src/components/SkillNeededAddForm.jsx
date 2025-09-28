
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const SkillNeededAddForm = () => {
  const { user, token, setSkillsNeeded } = useAppContext();
  const [name, setName] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!user || !user._id) {
      setError("You must be logged in to add a needed skill.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/skill/add-needed`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          name,
          level: proficiency,
          category,
          owner: user._id
        })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to add needed skill");
      // Refresh needed skills
      const skillsRes = await fetch(`/api/skill/user/${user._id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      const skillsData = await skillsRes.json();
      setSkillsNeeded(skillsData.skills || []);
      setName(""); setProficiency(""); setCategory("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <details className="mb-4">
      <summary className="cursor-pointer font-semibold text-lg text-[#190a64] mb-2">Add New Needed Skill</summary>
      <form className="flex flex-wrap gap-4 mt-2" onSubmit={handleSubmit}>
        <input className="border rounded px-3 py-2 text-sm w-40" placeholder="Skill/Area" value={name} onChange={e => setName(e.target.value)} required />
        <select className="border rounded px-3 py-2 text-sm w-32" value={proficiency} onChange={e => setProficiency(e.target.value)} required>
          <option value="">Proficiency</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
        <input className="border rounded px-3 py-2 text-sm w-32" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
        <button type="submit" className="bg-[#190a64] text-white px-4 py-2 rounded text-sm font-semibold" disabled={loading}>{loading ? "Adding..." : "Add"}</button>
        {error && <span className="text-red-500 text-xs ml-2">{error}</span>}
      </form>
    </details>
  );
};

export default SkillNeededAddForm;
