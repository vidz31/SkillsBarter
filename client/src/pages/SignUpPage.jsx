
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="bg-[#f5f5fa] min-h-screen py-8 flex flex-col">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center mt-3 mb-8">
        <h2 className="font-bold text-2xl mb-3 text-center">Create Your Skill Barter Account</h2>
        <p className="text-gray-600 text-base mb-5 text-center">Join our community and exchange skills without money.</p>

        {/* Social Sign Up */}
        <button className="w-full bg-white border border-gray-200 rounded-lg py-3 font-semibold text-base mb-2 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition">
          <span className="text-lg">🔵</span> Sign Up with Google
        </button>
        <button className="w-full bg-white border border-gray-200 rounded-lg py-3 font-semibold text-base mb-2 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition">
          <span className="text-lg">💼</span> Sign Up with LinkedIn
        </button>

        <div className="w-full text-center text-gray-300 text-sm my-2">OR</div>

        <form className="w-full flex flex-col gap-3">
          <input type="text" placeholder="Full Name" className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" placeholder="Email" className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Password" className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
          <div className="text-gray-500 text-xs -mt-2 mb-1">Must be at least 8 characters</div>

          <div className="font-semibold text-base mt-2 mb-1">Your Profile Basics</div>
          <textarea placeholder="Short Bio\nTell us about yourself and what you're passionate about" rows={2} className="rounded-lg border border-gray-200 px-4 py-3 text-base resize-vertical focus:outline-none focus:ring-2 focus:ring-primary" />
          <div className="text-gray-500 text-xs mb-1">Max 250 characters</div>
          <input type="text" placeholder="Skills You Offer (e.g. Web Development, Graphic Design)" className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="text" placeholder="Skills You Need (e.g. Marketing, Video Editing)" className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />

          <label className="flex items-center gap-2 text-sm my-1">
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="accent-primary" />
            <span>I agree to the <a href="#" className="text-[#190a64] underline">Terms of Service</a> and <a href="#" className="text-[#190a64] underline">Privacy Policy</a>.</span>
          </label>

          <button type="submit" className={`w-full rounded-lg py-3 font-semibold text-base mt-1 tracking-wide transition ${agreed ? 'bg-[#190a64] text-white cursor-pointer' : 'bg-[#190a46] text-white cursor-not-allowed'}`}>Create Account</button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-[#190a64] font-medium underline">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
