import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";



const SkillAddForm = () => {
  const { user, token, setSkillsOffered, backendUrl } = useAppContext();
  const [name, setName] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Available");
  const [location, setLocation] = useState("");
  const [barterType, setBarterType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debug: log user at render
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[SkillAddForm] user:", user);
  }, [user]);

  // Defensive: don't render form if user or user._id is missing
  if (!user || typeof user !== 'object' || !user._id) {
    return (
      <div className="mb-4 text-red-500 text-sm">You must be logged in to add a skill.</div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const ownerId = typeof user._id === 'object' && user._id.$oid ? user._id.$oid : user._id;
    if (!ownerId) {
      setError("User ID missing. Please log in again.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/skill/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          name,
          level: proficiency,
          category,
          status,
          location,
          barterType,
          owner: ownerId
        })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to add skill");
      // Refresh offered skills
      const skillsRes = await fetch(`/api/skill/user/${ownerId}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      const skillsData = await skillsRes.json();
      setSkillsOffered(skillsData.skills || []);
      setName(""); setProficiency(""); setCategory(""); setStatus("Available"); setLocation(""); setBarterType("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <details className="mb-4">
      <summary className="cursor-pointer font-semibold text-lg text-[#190a64] mb-2">Add New Offered Skill</summary>
      <form className="flex flex-wrap gap-4 mt-2" onSubmit={handleSubmit}>
        <input className="border rounded px-3 py-2 text-sm w-40" placeholder="Skill/Area" value={name} onChange={e => setName(e.target.value)} required />
        <select className="border rounded px-3 py-2 text-sm w-32" value={proficiency} onChange={e => setProficiency(e.target.value)} required>
          <option value="">Proficiency</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
        <input className="border rounded px-3 py-2 text-sm w-32" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
        <select className="border rounded px-3 py-2 text-sm w-32" value={location} onChange={e => setLocation(e.target.value)} required>
          <option value="">Location</option>
          <option>Remote</option>
          <option>Local</option>
          <option>Online</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm w-32" value={barterType} onChange={e => setBarterType(e.target.value)} required>
          <option value="">Barter Type</option>
          <option>Skill Exchange</option>
          <option>Time Exchange</option>
          <option>Project Collaboration</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm w-32" value={status} onChange={e => setStatus(e.target.value)} required>
          <option>Available</option>
          <option>Unavailable</option>
        </select>
        <button type="submit" className="bg-[#190a64] text-white px-4 py-2 rounded text-sm font-semibold" disabled={loading}>{loading ? "Adding..." : "Add"}</button>
        {error && <span className="text-red-500 text-xs ml-2">{error}</span>}
      </form>
    </details>
  );
};

export default SkillAddForm;
