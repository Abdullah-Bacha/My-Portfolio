import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Smartphone, User, Lightbulb, BookOpen } from 'lucide-react';

const WhyMe = () => {
  const reasons = [
    {
      icon: Code2,
      title: 'Clean & Maintainable Code',
      description: 'I write structured, readable, and scalable code that stays easy to extend and maintain as a project grows.',
    },
    {
      icon: Zap,
      title: 'Pixel-Perfect UI',
      description: 'I translate designs into precise interfaces, respecting spacing, typography, and visual hierarchy down to the pixel.',
    },
    {
      icon: Smartphone,
      title: 'Responsive by Default',
      description: 'Every layout I build is designed mobile-first and tested across screen sizes, from small phones to large desktops.',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'I optimize assets, rendering, and bundle size so pages load fast and interactions stay smooth.',
    },
    {
      icon: User,
      title: 'User-Centered Thinking',
      description: 'I focus on real user needs, building accessible, intuitive flows that make products easy and pleasant to use.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'I keep learning modern tools and best practices so the work I deliver stays current and production-ready.',
    },
  ];

  return (
    <section id="why-me" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why <span className="text-pink-500">Work With Me?</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I build web experiences that are visually polished, fast, responsive, accessible, and easy to maintain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-pink-500/30 transition-all group"
              >
                <div className="mb-4 p-3 bg-pink-500/10 rounded-lg w-fit group-hover:bg-pink-500/20 transition-colors">
                  <Icon size={28} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
