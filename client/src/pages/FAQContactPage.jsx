import React, { useState } from "react";
import { faqs } from "../assets/assets.js";
import Contact from "../components/Contact.jsx";
import CommunityContact from "../components/CommunityContact.jsx";

const FAQContactPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#f5f5fa] min-h-screen py-12 px-6">
      {/* Title Section */}
  <div className="max-w-6xl mx-auto text-center mb-17 mt-16">
        <h2 className="text-5xl font-bold mb-4">How Can We Help You?</h2>
        <p className="text-gray-500 text-lg">
          Find answers to common questions or reach out to us directly.
        </p>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-9">
          Frequently Asked Questions
        </h3>
        <p className="text-center text-gray-500 mb-10 text-sm max-w-2xl mx-auto">
          Find quick answers to common questions about using Skill Barter, 
          managing your account, and exchanging skills.
        </p>

        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* FAQ Item */}
              <div
                className="p-5 cursor-pointer select-none flex justify-between items-center"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-gray-900 text-base">
                  {faq.question}
                </span>

                {/* Chevron Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-[#190a64] transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}

              {/* Divider */}
              {index < faqs.length && <hr className="border-gray-300" />}
            </div>
          ))}
        </div>
      </section>

      <Contact/>
      <CommunityContact/>
    </div>
  );
};

export default FAQContactPage;
