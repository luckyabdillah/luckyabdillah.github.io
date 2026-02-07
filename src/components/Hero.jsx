import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-40 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-2xl text-center"
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-light text-xl md:text-2xl font-medium"
            >
              Hi, There! 👋🏻 I'm
            </motion.h4>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Lucky Abdillah
            </motion.h1>
            
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-primary font-semibold"
            >
              Software Engineer
            </motion.h5>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-muted text-lg leading-relaxed max-w-xl"
            >
              "Life is like riding a bicycle, to keep your balance you must keep moving" 
              <span className="text-primary-light font-medium"> -Albert Einstein</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="pt-4"
            >
              <a href="#contact" className="btn-primary inline-block">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text">ABOUT ME</h3>
            <p className="text-muted text-lg leading-relaxed">
              I'm a passionate software engineer dedicated to crafting innovative solutions through code. I love pushing technological boundaries and turning ideas into reality.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Know me more</h3>
            <p className="text-muted text-lg">
              Check this out and follow me on social media!
            </p>
            <div className="flex gap-6 pt-2">
              {[
                { Icon: FaInstagram, href: 'https://www.instagram.com/luckyabdillahh', color: 'hover:text-pink-500' },
                { Icon: FaGithub, href: 'https://github.com/luckyabdillah', color: 'hover:text-gray-400' },
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/luckyabdillah', color: 'hover:text-blue-500' },
                { Icon: FiMail, href: 'mailto:luckyabdillah00@gmail.com', color: 'hover:text-primary-light' },
              ].map((social, idx) => {
                const SocialIcon = social.Icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-4xl text-white ${social.color} transition-all duration-300 hover:scale-125`}
                  >
                    <SocialIcon />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
