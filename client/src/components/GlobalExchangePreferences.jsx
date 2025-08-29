import React from "react";

const GlobalExchangePreferences = () => (
  <div>
    <h2 className="font-bold text-2xl mb-5">Global Exchange Preferences</h2>
    <form className="space-y-4">
      <div className="flex gap-6">
        <div>
          <label className="block text-lg font-semibold mb-3">Availability</label>
          <div className="flex gap-2 flex-wrap">
            <label className="flex items-center gap-1"><input type="checkbox" className="accent-[#190a64]" /> Weekdays</label>
            <label className="flex items-center gap-1"><input type="checkbox" className="accent-[#190a64]" /> Weekends</label>
            <label className="flex items-center gap-1"><input type="checkbox" className="accent-[#190a64]" /> Mornings</label>
            <label className="flex items-center gap-1"><input type="checkbox" className="accent-[#190a64]" /> Evenings</label>
          </div>
        </div>
        <div>
          <label className="block text-lg font-semibold mb-3">Preferred Locations</label>
          <div className="flex gap-2 flex-wrap">
            <label className="flex items-center gap-1"><input type="radio" name="location" className="accent-[#190a64]" /> Online Only</label>
            <label className="flex items-center gap-1"><input type="radio" name="location" className="accent-[#190a64]" /> Offline (in-person meetings)</label>
            <label className="flex items-center gap-1"><input type="radio" name="location" className="accent-[#190a64]" /> Both Online & Offline</label>
          </div>
        </div>
        <div>
          <label className="block text-lg font-semibold mb-3">Mode of Exchange</label>
          <div className="flex gap-2 flex-wrap">
            <label className="flex items-center gap-1"><input type="checkbox" className="accent-[#190a64]" /> Online (Video Call, Chat)</label>
            <label className="flex items-center gap-1"><input type="checkbox" className="accent-[#190a64]" /> Offline (in-person meetings)</label>
            <label className="flex items-center gap-1"><input type="checkbox" className="accent-[#190a64]" /> Both Online & Offline</label>
          </div>
        </div>
      </div>
      <button type="submit" className="bg-[#190a64] w-full text-white mt-5 px-6 py-2 rounded font-semibold mt-2">Save Preferences</button>
    </form>
  </div>
);

export default GlobalExchangePreferences;
