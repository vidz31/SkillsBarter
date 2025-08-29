import React from "react";
import { HOW_IT_WORKS } from "../assets/assets.js";
import { Wallet, Brain, Star } from "lucide-react"; // import icons

// Map string names to actual components
const ICONS = {
  Wallet: <Wallet className="w-12 h-12 text-primary" />,
  Brain: <Brain className="w-12 h-12 text-primary" />,
  Star: <Star className="w-12 h-12 text-primary" />,
};

const Working = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {HOW_IT_WORKS.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="mb-4">{ICONS[step.icon]}</div>

            {/* Title & Text */}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.text}</p>

            {/* Optional image */}
            {step.img && (
              <img
                src={step.img}
                alt={step.title}
                className="mt-4 w-100 h-30 object-contain pb-4"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Working;
