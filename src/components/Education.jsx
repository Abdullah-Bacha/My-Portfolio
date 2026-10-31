import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../constants/data';

const Education = () => {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-24 bg-slate-900/50 data-[theme=light]:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white data-[theme=light]:text-slate-900">
            My <span className="text-blue-400">Education</span>
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto rounded-full mb-6 mt-4"></div>
          <p className="text-slate-400 data-[theme=light]:text-slate-600 max-w-2xl mx-auto text-lg">
            Academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              <div className="bg-slate-800/50 data-[theme=light]:bg-white rounded-lg p-8 border border-slate-700 data-[theme=light]:border-slate-200 hover:border-blue-400/50 data-[theme=light]:hover:border-blue-400/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-blue-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white data-[theme=light]:text-slate-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg">{edu.institution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-slate-400 data-[theme=light]:text-slate-600 text-sm mb-1">Field of Study</p>
                    <p className="text-white data-[theme=light]:text-slate-900">{edu.field}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} className="text-slate-400" />
                      <p className="text-slate-400 data-[theme=light]:text-slate-600 text-sm">Duration</p>
                    </div>
                    <p className="text-white data-[theme=light]:text-slate-900">{edu.year}</p>
                  </div>
                  {edu.location && (
                    <div>
                      <p className="text-slate-400 data-[theme=light]:text-slate-600 text-sm mb-1">Location</p>
                      <p className="text-white data-[theme=light]:text-slate-900">{edu.location}</p>
                    </div>
                  )}
                </div>

                {edu.cgpa && (
                  <div className="mb-6 p-4 bg-blue-400/10 rounded-lg border border-blue-400/20 data-[theme=light]:bg-blue-50 data-[theme=light]:border-blue-200">
                    <p className="text-slate-400 data-[theme=light]:text-slate-600 text-sm mb-1">CGPA</p>
                    <p className="text-lg font-semibold text-blue-400">{edu.cgpa}</p>
                  </div>
                )}

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="pt-6 border-t border-slate-700 data-[theme=light]:border-slate-200">
                    <h4 className="font-semibold text-white data-[theme=light]:text-slate-900 mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.coursework.map((course, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">✓</span>
                          <span className="text-slate-300 data-[theme=light]:text-slate-700 text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="pt-6 border-t border-slate-700 data-[theme=light]:border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={18} className="text-blue-400" />
                      <h4 className="font-semibold text-white data-[theme=light]:text-slate-900">Achievements</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm font-medium bg-blue-400/10 text-blue-400 data-[theme=light]:bg-blue-100 data-[theme=light]:text-blue-700 rounded-full border border-blue-400/30 data-[theme=light]:border-blue-400/50"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
