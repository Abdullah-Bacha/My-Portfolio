import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Junaid Saleem',
      role: 'Project Manager at Keydevs Technologies',
      image: '👨‍💼',
      text: 'Abdullah delivered exceptional work on multiple projects. His technical expertise in React and Next.js, combined with his attention to detail and ability to solve complex problems, makes him an invaluable asset to any team.',
      rating: 5,
    },
    {
      name: 'Udaisa',
      role: 'Senior Developer at DevelopersHub',
      image: '👩‍💻',
      text: 'Working with Abdullah was a great experience. He quickly grasped project requirements, wrote clean and maintainable code, and consistently delivered quality solutions on time. His collaborative approach makes him stand out.',
      rating: 5,
    },
    {
      name: 'Muhammad Ali',
      role: 'Team Lead at Carpe Diem',
      image: '👨‍🚀',
      text: 'Abdullah showed tremendous growth during his time with us. His passion for web development, willingness to learn, and ability to work independently on complex features impressed everyone. Highly recommended!',
      rating: 5,
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Others <span className="text-pink-500">Say</span>
          </h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto rounded-full mb-6 mt-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Feedback from colleagues and clients I've worked with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-pink-500/30 transition-all group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700/30">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-pink-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
