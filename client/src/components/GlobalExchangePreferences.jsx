
import React from "react";
import { useAppContext } from "../context/AppContext";

const GlobalExchangePreferences = () => {
  const { exchangePreferences } = useAppContext();
  // You can expand this to allow editing and saving preferences using setExchangePreferences from context
  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">Global Exchange Preferences</h2>
      <div className="mb-4">
        <div className="font-semibold">Availability:</div>
        <div className="text-gray-700 text-sm">{exchangePreferences.availability || "Not set"}</div>
      </div>
      <div className="mb-4">
        <div className="font-semibold">Preferred Locations:</div>
        <div className="text-gray-700 text-sm">{exchangePreferences.location || "Not set"}</div>
      </div>
      <div className="mb-4">
        <div className="font-semibold">Mode of Exchange:</div>
        <div className="text-gray-700 text-sm">{exchangePreferences.mode || "Not set"}</div>
      </div>
      {/* You can add a form here to update preferences using setExchangePreferences */}
    </div>
  );
};

export default GlobalExchangePreferences;
