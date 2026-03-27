import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import img from '../assets/1st.jpg';


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-5 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-indigo-400 font-semibold tracking-wide uppercase text-sm md:text-base mb-4"
            >
              {/* Welcome to my Profile */}
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Abdullah
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-1xl md:text-2xl text-slate-300 mb-5 h-5 "
            >
              I am a{' '}
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Responsive Designer',
                  2000,
                  'React Specialist',
                  2000,
                  'Problem Solver',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="font-semibold text-white"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-slate-400 text-lg mb-10 max-w-xl mx-auto md:mx-0 text-justify"
            >
              Empowering brands through high-performance digital solutions that prioritize speed, inclusivity, and aesthetic excellence. From seamless responsiveness to user-centric design, let's collaborate to transform your vision into a world-class digital reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                View Work <ArrowRight size={18} />
              </Link>
              <a
                href="#"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
              >
                Download CV <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Graphic Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-1 hidden md:flex justify-center"
          >
            <div className="relative w-80 h-80 mt-15 xl:w-96 xl:h-96">
              {/* Spinning gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-md px-2 py-2"></div>
              {/* Inner dark circle */}
              <div className="absolute inset-2 bg-slate-900 rounded-full z-10 flex items-center justify-center overflow-hidden border border-slate-800">
                {/* You can replace this with an actual image: <img src="/your-image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                <div className="text-slate-600 flex flex-col items-center">
                  <p className="mt-0 font-mono text-sm text-slate-500">
                    <img src={img} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
