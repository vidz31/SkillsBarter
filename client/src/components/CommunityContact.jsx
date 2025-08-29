import React from "react";
import { Mail, Phone, Clock } from "lucide-react";

const CommunityContact = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 mt-10">
      {/* Community Guidelines */}
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold mb-5">Community Guidelines</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Our community thrives on respect and collaboration. Please review our
          guidelines to ensure a positive and safe environment for everyone.
        </p>
        <button className="border border-gray-300 px-8 py-3 mt-4 rounded-md text-lg font-medium text-[#190a64] hover:bg-gray-50 transition">
          Read Our Community Guidelines
        </button>
      </div>

      {/* Direct Contact */}
      <div className="text-center">
        <h3 className="text-4xl font-bold mt-10 mb-3">Direct Contact</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Can’t find what you’re looking for? Reach out to us directly through
          the following channels.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {/* Email Support */}
          <div>
            <Mail className="w-8 h-8 mx-auto text-[#190a64] mb-3" />
            <h4 className="font-medium">Email Support</h4>
            <p className="text-sm text-gray-600 mb-1">
              For general inquiries and support.
            </p>
            <a
              href="mailto:support@skillbarter.com"
              className="text-[#190a64] font-medium"
            >
              support@skillbarter.com
            </a>
          </div>

          {/* Phone Support */}
          <div>
            <Phone className="w-8 h-8 mx-auto text-[#190a64] mb-3" />
            <h4 className="font-medium">Phone Support</h4>
            <p className="text-sm text-gray-600 mb-1">
              Available during business hours.
            </p>
            <p className="font-medium">(+1) 123-456-7890</p>
          </div>

          {/* Business Hours */}
          <div>
            <Clock className="w-8 h-8 mx-auto text-[#190a64] mb-3" />
            <h4 className="font-medium">Business Hours</h4>
            <p className="text-sm text-gray-600 mb-1">Monday - Friday</p>
            <p className="font-medium">9:00 AM - 5:00 PM EST</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityContact;
