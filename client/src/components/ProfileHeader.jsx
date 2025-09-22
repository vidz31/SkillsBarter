
import React, { useState } from "react";
import profile_img from "../assets/profile_img.png";
import { useAppContext } from "../context/AppContext";

const ProfileHeader = () => {
  const { user, credibility, setUser, token } = useAppContext();
  console.log('ProfileHeader user:', user);
  const [showEdit, setShowEdit] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    location: user?.location || "",
    about: user?.about || "",
    profileImage: user?.profileImage || "",
    linkedin: user?.socialLinks?.linkedin || "",
    twitter: user?.socialLinks?.twitter || "",
    website: user?.socialLinks?.website || "",
    github: user?.socialLinks?.github || ""
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async e => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/profile/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: form.name,
          bio: form.bio,
          location: form.location,
          about: form.about,
          profileImage: form.profileImage,
          socialLinks: {
            linkedin: form.linkedin,
            twitter: form.twitter,
            website: form.website,
            github: form.github
          }
        })
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
        setShowEdit(false);
      } else {
        setError(data.message || "Update failed");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white rounded-xl shadow p-6 mb-6">
      <img src={user?.profileImage || profile_img} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow" />
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
          <div>
            <h2 className="font-bold text-2xl text-gray-900">{user?.name || "User"}</h2>
            <div className="text-gray-500 text-sm">{user?.bio || "No bio provided"}</div>
            <div className="text-gray-500 text-xs mt-1">{user?.location}</div>
            {user?.about && <div className="text-gray-700 text-sm mt-2">{user.about}</div>}
            <div className="flex gap-2 mt-2">
              {user?.socialLinks?.linkedin && <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-xs">LinkedIn</a>}
              {user?.socialLinks?.twitter && <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-xs">Twitter</a>}
              {user?.socialLinks?.website && <a href={user.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-green-700 underline text-xs">Website</a>}
              {user?.socialLinks?.github && <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 underline text-xs">GitHub</a>}
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="text-xs text-blue-600 font-semibold">Credibility Score</span>
            <span className="text-lg font-bold text-blue-700">{credibility ?? 0} <span className="text-xs text-gray-400">/ 100</span></span>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-semibold" onClick={() => setShowEdit(true)}>Edit Profile</button>
        </div>
        {showEdit && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-0 relative flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-8 py-5 border-b">
                <h3 className="font-bold text-2xl text-gray-900">Edit Profile</h3>
                <button type="button" className="text-3xl text-gray-400 hover:text-gray-700" onClick={() => setShowEdit(false)}>&times;</button>
              </div>
              <form className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSave}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input name="name" value={form.name} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Bio</label>
                    <input name="bio" value={form.bio} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input name="location" value={form.location} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">About</label>
                    <textarea name="about" value={form.about} onChange={handleChange} className="border rounded px-3 py-2 w-full" rows={3} />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Profile Image URL</label>
                    <input name="profileImage" value={form.profileImage} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">LinkedIn</label>
                    <input name="linkedin" value={form.linkedin} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Twitter</label>
                    <input name="twitter" value={form.twitter} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    <input name="website" value={form.website} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">GitHub</label>
                    <input name="github" value={form.github} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 flex flex-col gap-2 mt-2">
                  {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
                  <button type="submit" className="bg-primary text-white rounded-lg px-6 py-3 text-base font-semibold w-full md:w-auto self-end" disabled={saving}>{saving ? "Saving..." : "Save Changes"}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
