import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import profile_img from "../assets/profile_img.png";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, wallet, logout } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav className="w-full fixed shadow-sm border-b border-gray-200 bg-white px-6 py-3 flex justify-between items-center z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8" />
          <span className="font-bold text-primary text-lg">SkillsBarter</span>
        </Link>
      </div>

      {/* Center / Right depending on login */}
      {user ? (
        // ---------- AFTER LOGIN ----------
        <div className="flex items-center gap-6">
          {/* Credits Button */}
          <button
            className="flex items-center gap-2 bg-blue-100 py-2 px-4 rounded-full drop-shadow hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => navigate("/buy")}
          >
            <span className="text-sm text-gray-700">Credits left: {wallet?.credits ?? 0}</span>
          </button>

          {/* Greeting */}
          <p className="text-gray-600 text-sm">Hi, {user.name}</p>

          {/* Profile Dropdown */}
          <div className="relative group">
            <img
              src={profile_img}
              alt="profile"
              className="h-10 w-10 rounded-full border border-gray-300 cursor-pointer"
            />
            <div className="absolute hidden group-hover:block top-12 right-0 bg-white shadow-lg rounded-lg w-32">
              <ul className="flex flex-col text-sm text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-b-lg"
                  onClick={logout}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        // ---------- BEFORE LOGIN ----------
        <div className="flex items-center gap-6">
          <Link
            to="/pricing"
            className="text-gray-600 hover:text-primary transition text-sm"
          >
            Pricing & Plans
          </Link>
          <Link
            to="/faq"
            className="text-gray-600 hover:text-primary transition text-sm"
          >
            Contact & FAQ
          </Link>
          <Link
            to="/login"
            className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 py-2 px-6 text-white font-medium rounded-full text-sm cursor-pointer hover:opacity-90 transition"
            style={{ textDecoration: 'none' }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="ml-2 px-6 py-2 text-sm rounded-full border border-indigo-600 text-indigo-700 font-medium bg-white hover:bg-indigo-50 transition"
            style={{ textDecoration: 'none' }}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
