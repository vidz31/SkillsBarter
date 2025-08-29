// components/BoostBartering.js
import React from "react";
import { Wallet } from "lucide-react";

const BoostBartering = () => {
  return (
    <section className="py-16 px-6  text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Boost Your Bartering Power with Skill Wallet Credits
      </h2>
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12">
        Purchase credits to initiate more exchanges, access premium skills, or support the community.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <Wallet className="w-12 h-12 mx-auto mb-4 text-[#190a64]" />
          <h3 className="text-2xl font-bold text-[#190a64] mb-2">100 Credits</h3>
          <p className="text-gray-500 text-lg">
            $10.00
          </p>
          <button className="w-full py-3 mt-5 rounded-lg text-white bg-[#190a64] font-semibold hover:bg-gray-200 transition">
                Upgrade Now
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <Wallet className="w-12 h-12 mx-auto mb-4 text-[#190a64]" />
          <h3 className="text-2xl font-bold text-[#190a64] mb-2">250 Credits</h3>
          <p className="text-gray-500 text-lg">
            $25.00
          </p>
          <button className="w-full py-3 mt-5 rounded-lg text-white bg-[#190a64] font-semibold hover:bg-gray-200 transition">
                Upgrade Now
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <Wallet className="w-12 h-12 mx-auto mb-4 text-[#190a64]" />
          <h3 className="text-2xl font-bold text-[#190a64] mb-2">500 Credits</h3>
          <p className="text-gray-500 text-lg">
            $50.00
          </p>
          <button className="w-full py-3 mt-5 rounded-lg text-white bg-[#190a64] font-semibold hover:bg-gray-200 transition">
                Upgrade Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoostBartering;
