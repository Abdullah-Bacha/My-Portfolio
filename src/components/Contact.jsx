import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants/data';

// Initialize EmailJS - Replace with your actual public key from emailjs.com
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'test_public_key');

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', null

  const phone = CONTACT_INFO.phone;
  const email = CONTACT_INFO.email;
  const location = CONTACT_INFO.location;
  const linkedin = SOCIAL_LINKS.linkedin;
  const githubUrl = SOCIAL_LINKS.github;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: email,
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');

      // Clear error message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 data-[theme=light]:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

        <div className="flex flex-col lg:flex-row gap-10 bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-xl">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>

            {phone && (
              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-xl" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-white hover:text-cyan-400">
                  {phone}
                </a>
              </div>
            )}

            {email && (
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <a href={`mailto:${email}`} className="text-white hover:text-cyan-400">
                  {email}
                </a>
              </div>
            )}

            {location && (
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <span className="text-white">{location}</span>
              </div>
            )}

            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-cyan-400">
                <FaLinkedin /> LinkedIn Profile
              </a>
            )}

            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-cyan-400">
                <FaGithub /> GitHub
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 data-[theme=light]:bg-white text-white data-[theme=light]:text-slate-900 px-4 py-3 rounded-lg border border-slate-700 data-[theme=light]:border-slate-300 focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 data-[theme=light]:bg-white text-white data-[theme=light]:text-slate-900 px-4 py-3 rounded-lg border border-slate-700 data-[theme=light]:border-slate-300 focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-900 data-[theme=light]:bg-white text-white data-[theme=light]:text-slate-900 px-4 py-3 rounded-lg border border-slate-700 data-[theme=light]:border-slate-300 focus:ring-2 focus:ring-cyan-500"
                required
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-900 data-[theme=light]:bg-white text-white data-[theme=light]:text-slate-900 px-4 py-3 rounded-lg border border-slate-700 data-[theme=light]:border-slate-300 focus:ring-2 focus:ring-cyan-500"
                required
              ></textarea>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500 text-green-400 rounded-lg">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500 text-red-400 rounded-lg">
                  ✗ Failed to send message. Please try again or contact directly via email.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 disabled:cursor-not-allowed text-black font-bold px-6 py-3 rounded-lg transition"
              >
                {loading ? 'Sending...' : 'Send Message'} <IoSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
