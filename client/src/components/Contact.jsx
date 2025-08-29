import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-8 mt-30">
      {/* Title */}
      <h3 className="text-3xl text-center font-bold mb-3">Send us a message</h3>
      <p className="text-gray-500 text-center mb-8 text-sm">
        Have a specific question or issue? Fill out the form below, and our
        support team will assist you.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#190a64] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#190a64] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Regarding my Skill Wallet credits"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#190a64] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#190a64] focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#190a64] text-white px-5 py-2 rounded-md font-medium hover:bg-[#190a50] transition"
        >
          Submit Request
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
