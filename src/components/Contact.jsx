import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4">
            Feel free to contact me for any project or collaboration.
          </p>
        </motion.div>

        {/* Container */}
        <div className="flex flex-col lg:flex-row gap-10 bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-xl">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >

            <h3 className="text-xl font-semibold text-white">Contact Info</h3>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-xl" />
              <a href="tel:+923101773357" className="text-white hover:text-cyan-400">
                +92 310 1773357
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <a href="mailto:bacha141998@gmail.com" className="text-white hover:text-cyan-400">
                bacha141998@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <span className="text-white">Pakistan</span>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdullah-bacha-24266826b/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white hover:text-cyan-400"
            >
              <FaLinkedin /> LinkedIn Profile
            </a>

            <a
              href="https://github.com/Abdullah-Bacha"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white hover:text-cyan-400"
            >
              <FaGithub /> GitHub
            </a>


          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-900 text-white px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-cyan-500"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-900 text-white px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-900 text-white px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-cyan-500"
                required
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-slate-900 text-white px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-cyan-500"
                required
              ></textarea>

              <button
                type="submit"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-3 rounded-lg transition"
              >
                Send Message <IoSend />
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;