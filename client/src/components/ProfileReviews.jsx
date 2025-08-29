import React from "react";

const reviews = [
  { name: "Maria Garcia", text: "Alex helped me design an intuitive interface for my new e-commerce app. Professional and highly skilled!", time: "3 weeks ago" },
  { name: "David Lee", text: "Excellent UX research insights. Alex is very thorough and delivered beyond expectations.", time: "1 month ago" },
  { name: "Sophia Chen", text: "Great collaboration on a prototyping project. Alex is a team player for sure!", time: "2 months ago" },
];

const ProfileReviews = () => (
  <div className="bg-white rounded-xl shadow p-6 mb-6">
    <div className="flex items-center justify-between mb-4">
      <div className="font-bold text-lg">Reviews & Ratings</div>
      <span className="text-blue-600 font-semibold text-sm">4.7 <span className="text-gray-400">(3 reviews)</span></span>
    </div>
    <ul className="space-y-4">
      {reviews.map((review, idx) => (
        <li key={idx} className="border-b border-gray-100 pb-3">
          <div className="font-semibold text-gray-800 text-sm mb-1">{review.name}</div>
          <div className="text-gray-600 text-sm mb-1">{review.text}</div>
          <div className="text-xs text-gray-400">{review.time}</div>
        </li>
      ))}
    </ul>
    <div className="mt-4 text-right">
      <button className="text-primary text-sm font-semibold">View All Reviews &rarr;</button>
    </div>
  </div>
);

export default ProfileReviews;
