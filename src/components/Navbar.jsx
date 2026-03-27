import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Home, User, Sparkles, Briefcase, Mail, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links ke sath icons define kar diye
  const navLinks = [
    { name: 'Home', to: 'home', icon: <Home size={18} /> },
    { name: 'About', to: 'about', icon: <User size={18} /> },
    { name: 'Skills', to: 'skills', icon: <Cpu size={18} /> },
    { name: 'Projects', to: 'projects', icon: <Briefcase size={18} /> },
    { name: 'Contact', to: 'contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section with Icon */}
          <div className="flex items-center gap-2 mb-6 group">
            {/* Chota sa badge style container */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 shadow-sm backdrop-blur-sm">
              <Sparkles size={16} className="text-indigo-400 animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-indigo-400">
                Welcome to my Portfolio
              </span>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-slate-300 hover:text-indigo-400 hover:bg-slate-800/50 transition-all cursor-pointer text-sm font-medium"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-2xl absolute w-full left-0 shadow-2xl border-t border-slate-800 overflow-hidden transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-4 py-4 text-slate-300 hover:text-indigo-400 hover:bg-slate-800/50 rounded-xl transition-all cursor-pointer border-b border-slate-800/50 last:border-0"
              >
                <span className="text-indigo-500">{link.icon}</span>
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
