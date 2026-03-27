import React from 'react';
import { motion } from 'framer-motion';
// import { Code2, Layout, Database, Smartphone, Server, FileJson } from 'lucide-react';
import { Layout, Palette, Code2, Smartphone, CodeXml, Zap } from 'lucide-react';

const Skills = () => {

  const skillsConfig = [
    {
      name: 'Core Frontend',
      icon: Layout,
      desc: 'React.js, JavaScript (ES6+), HTML5/CSS3',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      name: 'Modern Styling',
      icon: Palette,
      desc: 'Tailwind CSS, DaisyUI, Material UI, Bootstrap',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      name: 'Responsive Design',
      icon: Smartphone,
      desc: 'Mobile-First, Adaptive & Fluid Layouts',
      color: 'text-pink-400',
      bg: 'bg-pink-400/10'
    },
    {
      name: 'Development Flow',
      icon: Code2,
      desc: 'Clean Code, Modular Architecture, Best Practices',
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10'
    },
    {
      name: 'Version Control',
      icon: CodeXml, // 'Github' ki jagah ye use karein
      desc: 'Git, GitHub, Collaborative Workflow',
      color: 'text-slate-300',
      bg: 'bg-slate-300/10'
    },
    {
      name: 'Performance',
      icon: Zap,
      desc: 'Optimized Assets, Fast Loading & SEO Friendly',
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/10'
    },
  ];


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

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
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsConfig.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all shadow-xl hover:shadow-purple-500/10 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-slate-400">{skill.desc}</p>

                {/* Progress bar visual */}
                <div className="w-full bg-slate-700 rounded-full h-1.5 mt-6 overflow-hidden">
                  <div className={`h-1.5 rounded-full ${skill.bg.replace('/10', '')} w-4/5`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
