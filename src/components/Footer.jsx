import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { PERSONAL_INFO, SOCIAL_LINKS, CONTACT_INFO } from '../constants/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const name = PERSONAL_INFO.name;
  const footerTagline = PERSONAL_INFO.footerTagline;
  const githubUrl = SOCIAL_LINKS.github;
  const linkedin = SOCIAL_LINKS.linkedin;
  const email = CONTACT_INFO.email;
  const phone = CONTACT_INFO.phone;
  const location = CONTACT_INFO.location;

  return (
    <footer className="bg-slate-900 data-[theme=light]:bg-slate-100 border-t border-slate-800 data-[theme=light]:border-slate-300 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {name}
            </span>
            <p className="text-slate-400 data-[theme=light]:text-slate-600 mt-3 text-sm leading-relaxed max-w-sm">
              {footerTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white data-[theme=light]:text-slate-900 font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 data-[theme=light]:hover:text-indigo-600 text-sm transition-colors">↓ Home</a>
              <a href="#projects" className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 data-[theme=light]:hover:text-indigo-600 text-sm transition-colors block">↓ Projects</a>
              <a href="#skills" className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 data-[theme=light]:hover:text-indigo-600 text-sm transition-colors block">↓ Skills</a>
              <a href="#contact" className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 data-[theme=light]:hover:text-indigo-600 text-sm transition-colors block">↓ Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white data-[theme=light]:text-slate-900 font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              {phone && (
                <div className="flex items-center gap-2">
                  <FaPhone className="text-indigo-400 text-sm" />
                  <a href={`tel:${phone}`} className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 text-sm transition-colors">
                    {phone}
                  </a>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-indigo-400 text-sm" />
                  <a href={`mailto:${email}`} className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 text-sm transition-colors">
                    {email}
                  </a>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-indigo-400 text-sm" />
                  <span className="text-slate-400 data-[theme=light]:text-slate-600 text-sm">
                    {location}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-slate-800 data-[theme=light]:border-slate-300 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 sm:mb-0">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 data-[theme=light]:hover:text-indigo-600 transition-colors" title="GitHub">
                  <FaGithub size={22} />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noreferrer" className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 data-[theme=light]:hover:text-indigo-600 transition-colors" title="LinkedIn">
                  <FaLinkedin size={22} />
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="text-slate-400 data-[theme=light]:text-slate-600 hover:text-indigo-400 data-[theme=light]:hover:text-indigo-600 transition-colors" title="Email">
                  <FaEnvelope size={22} />
                </a>
              )}
            </div>

            <p className="text-slate-500 data-[theme=light]:text-slate-600 text-sm text-center sm:text-right">
              &copy; {currentYear} {name}. All rights reserved. | Designed with ❤️ using React & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
