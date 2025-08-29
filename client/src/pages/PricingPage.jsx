// src/pages/PricingPage.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import BoostBartering from "../components/BoostBartering";

const PricingPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#e6f7fa] py-16 px-6 md:px-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Unlock Your Full Potential
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Choose the plan that best suits your journey. Start bartering your
          skills today and explore Skill Wallet for seamless exchanges.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 btn-primary text-white font-semibold rounded-md shadow transition">
            Sign Up for Free
            </button>
            <button className="px-6 py-3 border border-gray-400 text-gray-700 font-semibold rounded-md hover:bg-gray-100 transition">
            Learn More
            </button>
        </div>
      </section>

      {/* Pricing Plans */}
        <div className="w-full bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Flexible Plans for Every Skill Exchanger</h2>
            <p className="text-gray-600 mb-10">
            Whether you’re just starting or looking for advanced features, we have a plan that’s right for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Freemium Plan */}
            <div className="bg-white rounded-lg shadow p-8 text-left border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Freemium</h3>
                <p className="text-gray-500 mb-6">Ideal for casual skill exchanges and exploring the community</p>
                <p className="text-3xl font-bold mb-6">Free</p>

                <ul className="space-y-3 mb-6 text-gray-600">
                <li>✔️ Up to 5 skill matches per month</li>
                <li>✔️ Basic profile visibility</li>
                <li>✔️ Standard chat features</li>
                <li>✔️ Limited skill wallet storage</li>
                <li>✔️ Standard matching prioritization</li>
                <li>❌ No priority support</li>
                <li>✔️ Community badges only</li>
                </ul>

                <button className="w-full py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium">
                Get Started Free
                </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#190a64] text-white rounded-lg shadow-lg p-8 text-left relative">
                <h3 className="text-xl font-semibold mb-4">Premium</h3>
                <p className="text-gray-200 mb-6">
                Unlock full potential with unlimited exchanges and advanced features
                </p>
                <p className="text-3xl font-bold mb-6">$19<span className="text-lg font-normal">/month</span></p>

                <ul className="space-y-3 mb-6 text-gray-100">
                <li>✔️ Unlimited skill matches</li>
                <li>✔️ Enhanced profile visibility</li>
                <li>✔️ Advanced chat and media sharing</li>
                <li>✔️ Generous skill wallet storage</li>
                <li>✔️ Advanced matching prioritization</li>
                <li>✔️ 24/7 priority support</li>
                <li>✔️ Exclusive premium badges</li>
                </ul>

                <button className="w-full py-3 rounded-lg bg-white text-indigo-900 font-semibold hover:bg-gray-200 transition">
                Upgrade Now
                </button>
            </div>
            </div>
        </div>
        </div>


      {/* Wallet Credits */}
      <BoostBartering/>

    </main>
  );
};

export default PricingPage;
