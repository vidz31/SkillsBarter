import React from 'react'
import { STEPS } from '../assets/assets.js'

const Steps = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        Your Bartering Journey
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center"
          >
            {/* Circle number */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

            {/* Image */}
            <div className="w-28 h-28 mb-3 flex items-center justify-center rounded-lg overflow-hidden bg-white shadow">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Steps
