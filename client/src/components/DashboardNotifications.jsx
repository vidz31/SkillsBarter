
import React from "react";
import { useAppContext } from "../context/AppContext";

const DashboardNotifications = () => {
  const { notifications } = useAppContext();
  return (
    <section className="mt-8">
      <h2 className="font-bold text-lg mb-4">Notifications & Activity</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <ul className="space-y-3">
          {notifications && notifications.length > 0 ? (
            notifications.map((note, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex-shrink-0">🔔</div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm">{note.message || "Notification"}</p>
                  <span className="text-gray-400 text-xs">{new Date(note.date).toLocaleString() || ""}</span>
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-400 text-sm">No notifications yet.</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default DashboardNotifications;
