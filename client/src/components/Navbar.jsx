import React, { useState } from "react";
import logo from "../assets/logo.png"; // adjust if needed
import profile_img from "../assets/profile_img.png"; // dummy profile pic

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="w-full shadow-sm border-b border-gray-200 bg-white px-6 py-3 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8" />
        <span className="font-bold text-primary text-lg">SkillsBarter</span>
      </div>

      {/* Center or Right depending on login */}
      {!isLoggedIn ? (
        // ---------- BEFORE LOGIN ----------
        <>
            <div className="flex gap-8">
                <a href="#" className="text-gray-600 hover:text-primary transition">
                Landing Page
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition">
                Pricing & Plans
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition">
                Contact & FAQ
                </a>
            </div>

            <div className="flex items-center gap-3">
                <button
                onClick={() => setIsLoggedIn(true)}
                className="px-6 py-3 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                Log In
                </button>
                <button
                onClick={() => setIsLoggedIn(true)}
                className="px-6 py-3 text-sm rounded-lg bg-primary text-white shadow-md hover:opacity-90 transition"
                >
                Sign Up
                </button>
            </div>
            </>
      ) : (
        // ---------- AFTER LOGIN ----------
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative px-8">
            <input
              type="text"
              placeholder="Search for skills or users..."
              className="border rounded-full px-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="absolute right-10 top-1.5 text-gray-500">🔍</span>
          </div>

          {/* Profile Avatar */}
          <img
            src={profile_img}
            alt="profile"
            className="h-10 w-10 rounded-full border border-gray-300 cursor-pointer"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
