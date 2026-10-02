import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navLinks } from '../constants/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Load from localStorage or default to dark
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update HTML attribute and localStorage
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isDark
        ? scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        : scrolled ? 'bg-slate-100/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left spacer for balance */}
          <div className="w-20"></div>

          {/* Centered Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all cursor-pointer text-sm font-medium ${
                  isDark
                    ? 'text-slate-300 hover:text-indigo-400 hover:bg-slate-800/50'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-200/50'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side: Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${
                isDark
                  ? 'text-slate-300 hover:text-indigo-400 hover:bg-slate-800/50'
                  : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-200/50'
              }`}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md focus:outline-none transition-colors ${
                  isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className={`md:hidden backdrop-blur-2xl absolute w-full left-0 shadow-2xl overflow-hidden transition-all duration-300 ${
          isDark
            ? 'bg-slate-900/98 border-t border-slate-800'
            : 'bg-slate-50/98 border-t border-slate-200'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all cursor-pointer ${
                  isDark
                    ? 'text-slate-300 hover:text-indigo-400 hover:bg-slate-800/50 border-b border-slate-800/50 last:border-0'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-200/50 border-b border-slate-200/50 last:border-0'
                }`}
              >
                <span className={isDark ? 'text-indigo-500' : 'text-indigo-600'}>{link.icon}</span>
                <span className="text-base font-semibold">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
