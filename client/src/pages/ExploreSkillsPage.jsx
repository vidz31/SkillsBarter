import React, { useState, useEffect } from "react";
import { Search, Star, MapPin, Clock, Filter } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const ExploreSkillsPage = () => {
  const { user, token } = useAppContext();

  // Request Barter handler
  const handleRequestBarter = async (skill) => {
    if (!user || !token) {
      toast.error("You must be logged in to request a barter.");
      return;
    }
    try {
      const res = await fetch("/api/barter/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ skillId: skill._id })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to request barter");
      toast.success("Barter request sent!");
    } catch (err) {
      toast.error(err.message);
    }
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    skillType: "All Skill Types",
    location: "Any Location",
    rating: "Any Rating",
    barterType: "All Barter Types"
  });
  const [allSkills, setAllSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      setError(null);
      try {
        const allRes = await fetch("/api/skill/all");
        if (!allRes.ok) throw new Error("Failed to fetch skills");
        let all = await allRes.json();
        // Filter out skills owned by the logged-in user
        if (user && user._id) {
          all = all.filter(skill => String(skill.owner) !== String(user._id));
        }
        setAllSkills(all);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, [user && user._id]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Filtering logic
  const filteredSkills = allSkills.filter(skill => {
    // Skill Type
    if (selectedFilters.skillType !== "All Skill Types" && skill.category !== selectedFilters.skillType) {
      return false;
    }
    // Location
    if (selectedFilters.location !== "Any Location" && skill.location !== selectedFilters.location) {
      return false;
    }
    // Barter Type
    if (selectedFilters.barterType !== "All Barter Types" && skill.barterType !== selectedFilters.barterType) {
      return false;
    }
    // Rating
    if (selectedFilters.rating !== "Any Rating") {
      const minRating = parseFloat(selectedFilters.rating);
      if (!skill.rating || skill.rating < minRating) return false;
    }
    // Search term
    if (searchTerm && !(
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (skill.category && skill.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )) {
      return false;
    }
    return true;
  });

  const clearFilters = () => {
    setSelectedFilters({
      skillType: "All Skill Types",
      location: "Any Location",
      rating: "Any Rating",
      barterType: "All Barter Types"
    });
  };

  return (
    <div className="bg-[#f5f5fa] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Skills</h1>
          <p className="text-gray-600">
            Discover amazing skills from our community. Find the perfect match for your learning goals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for skills, categories, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <Filter className="text-gray-500" size={20} />
            
            <select
              value={selectedFilters.skillType}
              onChange={(e) => handleFilterChange('skillType', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Skill Types</option>
              <option>Development</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Language</option>
              <option>Arts</option>
              <option>Finance</option>
              <option>Culinary</option>
              <option>Health</option>
            </select>

            <select
              value={selectedFilters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Any Location</option>
              <option>Remote</option>
              <option>Local</option>
              <option>Online</option>
            </select>
            <select
              value={selectedFilters.barterType}
              onChange={(e) => handleFilterChange('barterType', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Barter Types</option>
              <option>Skill Exchange</option>
              <option>Time Exchange</option>
              <option>Project Collaboration</option>
            </select>

            <select
              value={selectedFilters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Any Rating</option>
              <option value="4.5">4.5+ Stars</option>
              <option value="4.0">4.0+ Stars</option>
              <option value="3.5">3.5+ Stars</option>
            </select>

            {/* Barter Type filter removed */}

            <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading ? (
          <div className="text-center py-12 text-lg text-gray-500">Loading skills...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <>
            {/* Featured Skills section removed */}

            {/* Filtered Skills */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Skills ({filteredSkills.length})</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.length === 0 ? (
                  <div className="col-span-3 text-gray-500">No skills found.</div>
                ) : filteredSkills.map((skill) => (
                  <div key={skill._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{skill.name}</h3>
                        <p className="text-gray-600 text-sm">{skill.description}</p>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                        {skill.category || "General"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="text-sm font-medium">{skill.rating || "-"}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <MapPin size={14} />
                        <span className="text-sm">{skill.location || "-"}</span>
                      </div>
                    </div>
                    <button
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition"
                      onClick={() => handleRequestBarter(skill)}
                      disabled={user && String(skill.owner) === String(user._id)}
                      title={user && String(skill.owner) === String(user._id) ? "You cannot request your own skill" : "Request Barter"}
                    >
                      Request Barter
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreSkillsPage;
