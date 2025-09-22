import React from "react";
import { useAppContext } from "../context/AppContext";

const ProfileReviews = () => {
  const { user } = useAppContext();
  const reviews = user?.reviews || [];
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold text-lg">Reviews & Ratings</div>
        <span className="text-blue-600 font-semibold text-sm">
          {reviews.length > 0
            ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
            : "0.0"}
          <span className="text-gray-400"> ({reviews.length} reviews)</span>
        </span>
      </div>
      <ul className="space-y-4">
        {reviews.length > 0 ? reviews.map((review, idx) => (
          <li key={idx} className="border-b border-gray-100 pb-3">
            <div className="font-semibold text-gray-800 text-sm mb-1">{review.reviewerName || "Anonymous"}</div>
            <div className="text-gray-600 text-sm mb-1">{review.comment || review.text}</div>
            <div className="text-xs text-gray-400">{review.date ? new Date(review.date).toLocaleDateString() : ""}</div>
          </li>
        )) : <li className="text-gray-400">No reviews yet.</li>}
      </ul>
      <div className="mt-4 text-right">
        <button className="text-primary text-sm font-semibold">View All Reviews &rarr;</button>
      </div>
    </div>
  );
};

export default ProfileReviews;
