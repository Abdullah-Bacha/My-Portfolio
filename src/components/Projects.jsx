import React from 'react';
import { motion } from 'framer-motion';
import { CodeXml, ExternalLink } from 'lucide-react';
import { lucideIconMap } from '../lib/iconMap';
import { projectsData } from '../constants/data';

const ProjectIcon = ({ iconName, gradientFrom, gradientTo }) => {
  const Icon = lucideIconMap[iconName] || lucideIconMap.Package;
  return (
    <div className={`flex items-center justify-center h-full w-full bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-500`}>
      <Icon size={80} className="text-white drop-shadow-lg" />
    </div>
  );
};

const Projects = () => {
  const displayProjects = projectsData;

  return (
    <section id="projects" className="py-24 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {displayProjects?.map((project, index) => (
              <motion.div
                key={project._id || project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-slate-900/50 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-pink-500/30 transition-all duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.cardGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                      <ProjectIcon
                        iconName={project.iconName}
                        gradientFrom={project.gradientFrom}
                        gradientTo={project.gradientTo}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-800 text-pink-400 rounded-full border border-pink-500/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                      >
                        <CodeXml size={18} /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
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
