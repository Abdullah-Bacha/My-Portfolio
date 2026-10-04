import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      title: 'Started with Web Development',
      description: 'Began with the fundamentals of the web, building static pages and learning how structure, styling, and interactivity work together.',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    },
    {
      title: 'Moved into React Development',
      description: 'Shifted to component-based development with React, learning state management, hooks, and how to build dynamic applications.',
      skills: ['React.js', 'Hooks', 'Context API', 'Axios'],
    },
    {
      title: 'Modern UI & Frontend Ecosystem',
      description: 'Adopted modern styling systems and animation libraries to build polished, consistent, and professional-looking applications.',
      skills: ['Tailwind CSS', 'DaisyUI', 'Material UI', 'Framer Motion'],
    },
    {
      title: 'Building Production-Ready Projects',
      description: 'Started shipping complete applications with real APIs, responsive layouts, performance tuning, and continuous deployment.',
      skills: ['REST APIs', 'Vite', 'Git & GitHub', 'Performance Optimization'],
    },
    {
      title: 'What\'s Next',
      description: 'Continuing to grow into full-scale frontend engineering with stronger typing, server-side rendering, and advanced patterns.',
      skills: ['TypeScript', 'Next.js', 'Testing', 'Advanced React Patterns'],
    },
  ];

  return (
    <section id="journey" className="py-24 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Always <span className="text-indigo-400">Learning.</span> Always <span className="text-indigo-400">Building.</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A short look at how my development journey has progressed, from first lines of HTML to building production-ready applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={24} className="text-indigo-400" />
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-1 h-20 bg-indigo-500/20 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {milestone.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {milestone.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-medium bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
