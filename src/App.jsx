import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import WhyMe from './components/WhyMe';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Initialize theme from localStorage on app load
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    return saved === 'dark';
  });

  useEffect(() => {
    // Listen for storage changes (theme toggle from Navbar)
    const handleStorageChange = () => {
      const theme = localStorage.getItem('theme') || 'dark';
      setIsDark(theme === 'dark');
      document.documentElement.setAttribute('data-theme', theme);
    };

    // Also watch for attribute changes
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      setIsDark(theme === 'dark');
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.addEventListener('storage', handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDark
        ? 'bg-slate-900 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200'
        : 'bg-slate-50 text-slate-900 selection:bg-indigo-300/30 selection:text-slate-700'
    }`}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <WhyMe />
      <Journey />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
