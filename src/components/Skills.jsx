import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { lucideIconMap } from '../lib/iconMap';
import { skillsConfig } from '../constants/data';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const CountUpNumber = ({ target, isActive }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    let currentCount = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isActive, target]);

  return Math.round(count);
};

const SkillSkeleton = () => (
  <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-8 animate-pulse">
    <div className="w-14 h-14 bg-slate-700 rounded-xl mb-6"></div>
    <div className="h-5 bg-slate-700 rounded w-2/3 mb-3"></div>
    <div className="h-4 bg-slate-700 rounded"></div>
    <div className="h-1.5 bg-slate-700 rounded-full mt-6"></div>
  </div>
);

const detailedSkills = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS'],
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    category: 'Frameworks',
    skills: ['React.js v18+', 'Next.js (App Router, SSR, SSG, ISR)', 'Server Components', 'API Routes', 'Image & Font Optimization'],
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    category: 'State Management',
    skills: ['Redux Toolkit', 'RTK Query', 'Zustand', 'Context API', 'React Query'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    category: 'Styling / UI',
    skills: ['Tailwind CSS', 'Material UI', 'Bootstrap 5', 'DaisyUI', 'Framer Motion', 'GSAP', 'CSS Transitions'],
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
  {
    category: 'APIs & Data',
    skills: ['REST APIs', 'Axios', 'React Query', 'Postman', 'JSON', 'JWT', 'LocalStorage', 'Next.js API Routes'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    category: 'Backend / Databases',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    category: 'Performance',
    skills: ['Core Web Vitals', 'Lighthouse Audits', 'Bundle Analysis', 'Memoization (useMemo/useCallback)', 'Code Splitting', 'Lazy Loading', 'SEO'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    category: 'Tools & Deployment',
    skills: ['Git', 'GitHub', 'Vercel', 'VPS Deployment', 'VS Code', 'Chrome DevTools', 'npm', 'yarn'],
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
  },
  {
    category: 'Methodology',
    skills: ['Agile / Scrum', 'Sprint Planning', 'Code Reviews', 'Feature Branching', 'Pull Requests'],
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
];

const Skills = () => {
  const displaySkills = skillsConfig;
  const [hoveredSkill, setHoveredSkill] = React.useState(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {displaySkills?.map((skill) => {
            const Icon = lucideIconMap[skill.iconName] || lucideIconMap.Code2;
            const isHovered = hoveredSkill === skill.name;
            return (
              <motion.div
                key={skill._id || skill.name}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all shadow-xl hover:shadow-purple-500/10 group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{skill.description || skill.desc}</p>
                {(skill.details || skill.desc) && (
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{skill.details}</p>
                )}
                {isHovered && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">Proficiency</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        <CountUpNumber target={skill.proficiency} isActive={isHovered} />%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2 overflow-hidden">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Skills by Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedSkills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${skillGroup.bgColor} border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all`}
              >
                <h4 className={`text-lg font-bold ${skillGroup.color} mb-4`}>
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className={`${skillGroup.color} mt-1 text-lg leading-none`}>•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
