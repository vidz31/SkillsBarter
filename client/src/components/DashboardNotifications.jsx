import React from "react";
import { UserPlus, CheckCircle, Star, TrendingUp } from "lucide-react";

const notifications = [
  {
    icon: <UserPlus className="text-[#190a64] w-5 h-5" />,
    text: (
      <>
        <span className="font-semibold">Alice Johnson</span> invited you to barter for{" "}
        <span className="font-semibold">Frontend Development</span>!
      </>
    ),
    time: "2 min ago",
  },
  {
    icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    text: (
      <>
        <span className="font-semibold">Bob Williams</span> accepted your barter offer for{" "}
        <span className="font-semibold">Web Development</span>!
      </>
    ),
    time: "10 min ago",
  },
  {
    icon: <Star className="text-yellow-500 w-5 h-5" />,
    text: (
      <>
        You got a new review regarding{" "}
        <span className="font-semibold">Digital Marketing</span>!
      </>
    ),
    time: "1 hr ago",
  },
  {
    icon: <TrendingUp className="text-blue-500 w-5 h-5" />,
    text: (
      <>
        Your <span className="font-semibold">Skill Barter Credibility Score</span> has
        increased!
      </>
    ),
    time: "2 hr ago",
  },
];

const DashboardNotifications = () => (
  <section className="mt-8">
    <h2 className="font-bold text-lg mb-4">Notifications & Activity</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <ul className="space-y-3">
        {notifications.map((note, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex-shrink-0">{note.icon}</div>
            <div className="flex-1">
              <p className="text-gray-700 text-sm">{note.text}</p>
              <span className="text-gray-400 text-xs">{note.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default DashboardNotifications;
