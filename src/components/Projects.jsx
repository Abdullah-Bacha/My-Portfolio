import React from 'react';
import { motion } from 'framer-motion';
import { CodeXml, ExternalLink } from 'lucide-react';
import {
  CloudSun,
  Film,
  Users,
  Trophy,
  Newspaper,
  ClipboardList
} from 'lucide-react';


const Projects = () => {
  const projectsData = [
    {
      title: 'SkyCast Weather App',
      description: 'A professional-grade meteorological dashboard featuring real-time tracking, 7-day precise forecasts, and an interactive air quality index using a sleek glassmorphic UI.',
      tags: ['React JS', 'Tailwind CSS', 'Daisy UI', 'OpenWeather API'],
      image: (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
          <CloudSun size={80} className="text-white drop-shadow-lg animate-bounce-slow" />
        </div>
      ),
      gradient: 'from-blue-600 via-indigo-500 to-cyan-400',
      github: "https://github.com/Abdullah-Bacha/Weather-App",
      demo: 'https://weather-app-beryl-eta-51.vercel.app/'
    },
    {
      title: 'Movie Insights App',
      description: 'A dynamic movie discovery platform fetching real-time data from TMDB API, featuring trending lists, search functionality, and detailed movie profiles.',
      tags: ['React', 'Axios', 'TMDB API', 'Tailwind CSS'],
      image: (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-red-500 to-black rounded-xl group-hover:scale-110 transition-transform duration-500">
          <Film size={80} className="text-white" />
        </div>
      ),
      gradient: 'from-red-600 to-black',
      github: 'https://github.com/Abdullah-Bacha/Movie--App',
      demo: 'https://movie-app-blond-pi.vercel.app/' // Isko apni deploy link se update karlein
    },
    {
      title: 'Employee Management System',
      description: 'A comprehensive CRUD-based system to manage employee records, track performance, and handle organizational roles with a focus on data integrity.',
      tags: ['React', 'Context API', 'Local Storage', 'Tailwind'],
      image: (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-emerald-500 to-teal-700 rounded-xl group-hover:scale-110 transition-transform duration-500">
          <Users size={80} className="text-white" />
        </div>
      ),
      gradient: 'from-emerald-500 to-teal-700',
      github: 'https://github.com/Abdullah-Bacha/EMS-App',
      demo: 'https://ems-app-beta.vercel.app/'
    },
    {
      title: 'Quiz Master App',
      description: 'An interactive quiz platform with timed challenges, category selection, and instant score calculation to test knowledge across various topics.',
      tags: ['React', 'State Management', 'JSON API', 'Framer Motion'],
      image: (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-400 to-yellow-600 rounded-xl group-hover:scale-110 transition-transform duration-500">
          <Trophy size={80} className="text-white" />
        </div>
      ),
      gradient: 'from-orange-500 to-yellow-500',
      github: 'https://github.com/Abdullah-Bacha/Quiz-App-with-Timer-Result',
      demo: 'https://quiz-app-with-timer-result.vercel.app/'
    },
    {
      title: 'Pulse News App',
      description: 'A real-time news aggregator providing the latest headlines from across the globe, categorized by technology, business, and entertainment.',
      tags: ['React', 'NewsAPI', 'Hooks', 'Responsive Design'],
      image: (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl group-hover:scale-110 transition-transform duration-500">
          <Newspaper size={80} className="text-white" />
        </div>
      ),
      gradient: 'from-gray-700 to-gray-900',
      github: 'https://github.com/Abdullah-Bacha/Quiz-App-with-Timer-Result',
      demo: 'https://news-app-two-bice.vercel.app/'
    },
    {
      title: 'To-Do App',
      description: 'A streamlined productivity tool designed to efficiently manage tasks, track daily goals, and provide real-time updates for a clutter-free workflow.',
      tags: ['React', 'JavaScript', 'Framer Motion', 'Tailwind CSS'],
      image: (
        <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-500">
          <ClipboardList size={80} className="text-white" />
        </div>
      ),
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/Abdullah-Bacha/To_Do_App',
      demo: 'https://to-do-app-three-bay.vercel.app/'
    },
  ];



  return (
    <section id="projects" className="py-24 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-pink-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Some of my recent work that showcases my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Updated Grid: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-slate-900/50 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-pink-500/30 transition-all duration-300 group"
            >
              {/* Image Area */}
              <div className="relative aspect-video overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                   {/* Centering the Icon */}
                   <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-800 text-pink-400 rounded-full border border-pink-500/10">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    <CodeXml size={18} /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Projects;
