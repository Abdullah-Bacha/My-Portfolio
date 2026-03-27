import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* LEFT SIDE */}
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Abdullah Bacha
            </span>
            <p className="text-slate-400 mt-2 text-sm max-w-sm">
              Building modern, responsive, and high-performance web applications using React and latest technologies.
            </p>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="flex space-x-6">

            {/* GitHub */}
            <a 
              href="https://github.com/Abdullah-Bacha"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/abdullah-bacha-24266826b/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>

            {/* Email */}
            <a 
              href="mailto:bacha141998@gmail.com"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Abdullah Bacha. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;