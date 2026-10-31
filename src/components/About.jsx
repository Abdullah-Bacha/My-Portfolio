import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/2nd.jpeg';
import { ABOUT_BIO, ABOUT_STATS, ABOUT_TECH_BADGES } from '../constants/data';

const About = () => {
  const badges = ABOUT_TECH_BADGES;
  const bio = ABOUT_BIO;
  const yearsExperience = ABOUT_STATS.yearsExperience;
  const projectsCompleted = ABOUT_STATS.projectsCompleted;

  return (
    <section id="about" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative group perspective-1000 mb-10">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
              <div className="relative aspect-square w-72 xs:w-80 bg-slate-900/90 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center backdrop-blur-xl animate-float">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={img}
                    alt="Developer Profile"
                    className="w-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-3/5 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Bringing Ideas to Life Through Code
            </h3>

            {bio.map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed text-lg text-justify tracking-tight">
                {para}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-700/50 mt-6">
              <div>
                <span className="block text-4xl font-bold text-indigo-400 mb-2">
                  {yearsExperience}
                </span>
                <span className="text-slate-400">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-pink-400 mb-2">
                  {projectsCompleted}
                </span>
                <span className="text-slate-400">Projects Completed</span>
              </div>
            </div>
          </motion.div>
        </div>

        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-12 mt-15 mx-auto">
            {badges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <div className="text-4xl">{badge.icon}</div>
                <span className="text-sm font-medium">{badge.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
