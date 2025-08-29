import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <div className="bg-[#f5f5fa] min-h-screen py-8 flex flex-col">
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center mt-8 mb-8">
        <img src={logo} alt="logo" className="w-10 h-10 mb-2s flex items-center justify-center text-3xl" />
        <h2 className="font-bold text-4xl mb-4 text-center">Welcome Back!</h2>
        <p className="text-gray-500 text-base mb-5 text-center">Log in to your Skill Barter account to continue your journey</p>
        <form className="w-full flex flex-col gap-3">
          <input type="text" placeholder="Email or Username" className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Password" className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
          <button type="submit" className="w-full rounded-lg py-3 font-semibold text-base mt-1 tracking-wide bg-[#190a64] text-white hover:bg-[#190a54] transition">Log In</button>
          <div className="flex justify-end w-full mt-2">
            <Link to="#" className="text-[#190a64] text-xs font-medium underline">Forgot Password?</Link>
          </div>
        </form>
        <div className="w-full text-center text-gray-300 text-sm my-2">OR</div>
        <button className="w-full bg-white border border-gray-200 rounded-lg py-3 font-semibold text-base mb-2 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition">
           Log in with Google
        </button>
        <button className="w-full bg-white border border-gray-200 rounded-lg py-3 font-semibold text-base mb-2 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition">
           Log in with LinkedIn
        </button>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account? <Link to="/signup" className="text-[#190a64] font-medium underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
