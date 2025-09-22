import React from "react";
import homepage from "../assets/homepage.jpg"; 
import Steps from "../components/Steps";
import Benefits from "../components/Benefits";
import Working from "../components/Working";

const HomePage = () => {
  return (
    <main>
  <section className="bg-[#e6f7fa] py-16 mt-16 px-6 md:px-20 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Exchange Skills, Not Money: <br /> 
          <span className="text-primary">Build Your Future Together</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Skill Barter connects you with a vibrant community to exchange knowledge,
          services, and expertise without financial transactions. Unlock new
          opportunities, enhance your profile, and grow your network.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary">Sign Up Now</button>
          <button className="px-6 py-3 border border-gray-400 rounded-md font-semibold hover:bg-gray-100">
            Explore Skills
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={homepage}
            alt="Community"
            className="rounded-lg max-w-3xl w-full shadow-md"
          />
        </div>

      </section>
      <Working/>
      <Steps/>
      <Benefits/>
    </main>
  );
};

export default HomePage;
