import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp link with form data
    const whatsappMessage = encodeURIComponent(
      `${formData.message}\n\n– ${formData.name}`
    );
    const whatsappLink = `https://wa.me/6281283890098?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h4 className="text-primary-light text-xl font-semibold mb-3">Get In Touch</h4>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Me</h3>
          <p className="text-muted text-lg">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Let's work together!</h4>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Whether you prefer email, forms, or social media—reach out and let's connect!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-light/10 rounded-full flex items-center justify-center">
                  <FiMail className="text-primary-light text-2xl" />
                </div>
                <div>
                  <p className="text-muted text-sm">Email</p>
                  <a href="mailto:luckyabdillah00@gmail.com" className="text-white hover:text-primary-light transition-colors text-lg">
                    luckyabdillah00@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-light/10 rounded-full flex items-center justify-center">
                  <FiMapPin className="text-primary-light text-2xl" />
                </div>
                <div>
                  <p className="text-muted text-sm">Location</p>
                  <p className="text-white text-lg">Indonesia</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-white mb-4 font-semibold">Follow me on:</p>
              <div className="flex gap-6">
                {[
                  { Icon: FaInstagram, href: 'https://www.instagram.com/luckyabdillahh', color: 'hover:text-pink-500' },
                  { Icon: FaGithub, href: 'https://github.com/luckyabdillah', color: 'hover:text-gray-400' },
                  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/luckyabdillah', color: 'hover:text-blue-500' },
                ].map((social, idx) => {
                  const SocialIcon = social.Icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-3xl text-white ${social.color} transition-all duration-300 hover:scale-125`}
                    >
                      <SocialIcon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-dark-lighter p-8 rounded-2xl shadow-xl">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-lighter focus:border-primary-light rounded-lg text-white placeholder-muted outline-none transition-colors"
                  placeholder="Your name"
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark border border-dark-lighter focus:border-primary-light rounded-lg text-white placeholder-muted outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  autoComplete="off"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
