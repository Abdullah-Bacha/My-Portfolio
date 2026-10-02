import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend React.js Developer',
      company: 'Keydevs Technologies',
      period: '05/2025 - Present',
      location: 'Lahore, PK',
      description: 'Developing responsive web applications using React.js & Next.js. Building reusable components, integrating REST APIs, managing state with Redux Toolkit & Zustand, and optimizing performance.',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'REST APIs'],
      icon: '💼',
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Carpe Diem Team',
      period: '12/2024 - 05/2025',
      location: 'Karachi, PK (Remote)',
      description: 'Delivered interactive web experiences using React.js & JavaScript. Transformed designs into pixel-perfect interfaces. Coordinated with remote team for feature implementation and UI refinement.',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'API Integration'],
      icon: '🎯',
    },
    {
      title: 'Frontend Developer (Intern)',
      company: 'DevelopersHub',
      period: '08/2024 - 11/2024',
      location: 'Lahore, PK',
      description: 'Integrated REST APIs, optimized component rendering, and ensured cross-device compatibility. Maintained clean code through Git workflows and delivered UI enhancements within sprint deadlines.',
      skills: ['React.js', 'Git', 'Responsive Design', 'API Integration', 'Agile'],
      icon: '🚀',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-24 bg-slate-900/50 data-[theme=light]:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white data-[theme=light]:text-slate-900">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mb-6 mt-4"></div>
          <p className="text-slate-400 data-[theme=light]:text-slate-600 max-w-2xl mx-auto text-lg">
            2+ years of hands-on experience building production-ready web applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-8 border-l-2 border-cyan-400 pb-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-900 data-[theme=light]:border-slate-50"></div>

              <div className="bg-slate-800/50 data-[theme=light]:bg-white rounded-lg p-6 border border-slate-700 data-[theme=light]:border-slate-200 hover:border-cyan-400/50 data-[theme=light]:hover:border-cyan-400/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white data-[theme=light]:text-slate-900">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-3xl">{exp.icon}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400 data-[theme=light]:text-slate-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>

                <p className="text-slate-300 data-[theme=light]:text-slate-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-400 data-[theme=light]:bg-cyan-100 data-[theme=light]:text-cyan-700 rounded-full border border-cyan-400/30 data-[theme=light]:border-cyan-400/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
