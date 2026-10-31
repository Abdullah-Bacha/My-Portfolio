import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import img from '../assets/3rd.jpeg';

const services = [
  'Responsive React.js and Next.js web applications',
  'Admin dashboards with role-based access',
  'REST API integration with authentication workflows',
  'Pixel-accurate interfaces built from Figma designs',
  'Performance tuning with code splitting and lazy loading',
];

const Freelance = () => {
  return (
    <section id="freelance" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Freelance <span className="text-purple-400">Work</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-60 transition duration-500"></div>
              <img
                src={img}
                alt="Abdullah Bacha working at his desk"
                className="relative w-72 xs:w-80 aspect-[3/4] object-cover rounded-2xl border border-white/10 shadow-2xl"
              />
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
              Open to freelance projects
            </h3>

            <p className="text-slate-300 leading-relaxed text-lg">
              I take on freelance work for businesses and startups that need a dependable frontend developer. From a single landing page to a full admin dashboard, I build clean, responsive code and keep it easy to maintain.
            </p>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-purple-400 mt-1 shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex items-center gap-2 cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all"
            >
              Let's work together <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
