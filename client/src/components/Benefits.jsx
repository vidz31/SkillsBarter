import React from "react";
import { BENEFITS } from "../assets/assets.js";

const Benefits = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Benefits for Everyone
      </h2>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {BENEFITS.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 text-sm">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
