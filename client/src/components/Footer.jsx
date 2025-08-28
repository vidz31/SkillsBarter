import React from "react";
import logo from "../assets/logo.png"; // replace with your logo

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="logo" className="h-8" />
            <span className="font-bold text-[var(--primary)]">Skill Barter</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Exchange Skills, Not Money. <br /> Build Credibility. <br /> Foster
            Community.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-500">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[var(--primary)]">Skill Wallet</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">AI Matching</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">Reviews</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">Gamification</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[var(--primary)]">Community Guidelines</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[var(--primary)]">Support</a></li>
            <li><a href="#" className="hover:text-[var(--primary)]">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2024 Skill Barter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
