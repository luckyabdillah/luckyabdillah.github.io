import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiPhp, SiLaravel, SiMysql, SiPostgresql, SiMongodb, SiDocker, SiGit, SiTailwindcss, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiExpress, SiKotlin, SiSwift, SiCss3, SiHtml5, SiBootstrap, SiGraphql, SiRedis, SiJenkins, SiAmazon, SiGooglecloud, SiCplusplus, SiJquery, SiFirebase, SiVercel, SiGithub, SiArduino, SiRaspberrypi, SiJouav, SiVite, SiLinux, SiNginx, SiEspressif, SiSqlite, SiPostman, SiJsonwebtokens, SiSass, SiSelenium, SiNextui, SiDaisyui, SiEjs, SiCodeigniter, SiFlutter } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';

const Tech = () => {
  const [activeTab, setActiveTab] = useState('Language');

  const techGroups = {
    'Language': [
      { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Python', Icon: SiPython, color: 'text-blue-400' },
      { name: 'PHP', Icon: SiPhp, color: 'text-indigo-400' },
      { name: 'Flutter', Icon: SiFlutter, color: 'text-cyan-400' },
      { name: 'Java', Icon: BiLogoJava, color: 'text-red-600' },
      { name: 'Kotlin', Icon: SiKotlin, color: 'text-purple-500' },
    //   { name: 'Swift', Icon: SiSwift, color: 'text-orange-500' },
    ],
    'Frontend': [
      { name: 'React', Icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js', Icon: SiNextdotjs, color: 'text-white' },
    //   { name: 'Vue.js', Icon: SiVuedotjs, color: 'text-green-400' },
    //   { name: 'Nuxt', Icon: SiNuxtdotjs, color: 'text-green-500' },
      { name: 'Vite', Icon: SiVite, color: 'text-purple-400' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'EJS', Icon: SiEjs, color: 'text-yellow-600' },
      { name: 'NextUI', Icon: SiNextui, color: 'text-gray-400' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: 'text-purple-600' },
      { name: 'SASS', Icon: SiSass, color: 'text-pink-500' },
      { name: 'jQuery', Icon: SiJquery, color: 'text-blue-400' },
      // { name: 'HTML5', Icon: SiHtml5, color: 'text-orange-600' },
      // { name: 'CSS3', Icon: SiCss3, color: 'text-blue-600' },
    ],
    'Backend': [
      { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express.js', Icon: SiExpress, color: 'text-gray-400' },
      { name: 'Laravel', Icon: SiLaravel, color: 'text-red-500' },
      { name: 'GraphQL', Icon: SiGraphql, color: 'text-pink-500' },
      { name: 'Firebase', Icon: SiFirebase, color: 'text-yellow-400' },
      { name: 'CodeIgniter', Icon: SiCodeigniter, color: 'text-red-600' },
      { name: 'JWT Auth', Icon: SiJsonwebtokens, color: 'text-blue-500' },
    ],
    'Database': [
      { name: 'MySQL', Icon: SiMysql, color: 'text-orange-400' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-blue-500' },
      { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-500' },
      { name: 'Firestore', Icon: SiFirebase, color: 'text-yellow-400' },
      { name: 'SQLite', Icon: SiSqlite, color: 'text-blue-400' },
      { name: 'Redis', Icon: SiRedis, color: 'text-red-600' },
    ],
    'DevOps & Tools': [
      { name: 'Git', Icon: SiGit, color: 'text-orange-500' },
      { name: 'GitHub', Icon: SiGithub, color: 'text-gray-400' },
      { name: 'Docker', Icon: SiDocker, color: 'text-blue-400' },
      { name: 'Vercel', Icon: SiVercel, color: 'text-black' },
      { name: 'Linux', Icon: SiLinux, color: 'text-yellow-400' },
      { name: 'Nginx', Icon: SiNginx, color: 'text-green-400' },
      { name: 'Selenium', Icon: SiSelenium, color: 'text-green-600' },
      { name: 'Postman', Icon: SiPostman, color: 'text-orange-600' },
    //   { name: 'Jenkins', Icon: SiJenkins, color: 'text-red-600' },
    //   { name: 'AWS', Icon: SiAmazon, color: 'text-orange-600' },
    //   { name: 'Google Cloud', Icon: SiGooglecloud, color: 'text-blue-500' },
    ],
    'Embedded / IoT': [
      { name: 'C++', Icon: SiCplusplus, color: 'text-blue-600' },
      { name: 'Arduino', Icon: SiArduino, color: 'text-blue-400' },
      { name: 'Raspberry Pi', Icon: SiRaspberrypi, color: 'text-pink-700' },
      { name: 'ESP32', Icon: SiEspressif, color: 'text-red-600' },
    ]
  };

  return (
    <section id="tech" className="section-padding bg-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h4 className="text-primary-light text-xl font-semibold mb-3">Technologies</h4>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Tech Stack</h3>
          <p className="text-muted text-lg">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(techGroups).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
              className={`tab-btn px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary-light text-dark shadow-lg shadow-primary/40'
                  : 'bg-dark-lighter text-primary-light border border-primary-light/30 hover:border-primary-light/60'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {techGroups[activeTab].map((tech, idx) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  transition={{ duration: 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex flex-col items-center gap-3 p-6 bg-dark-lighter rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <tech.Icon className={`text-5xl ${tech.color}`} />
                  <span className="text-white font-medium text-sm text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Tech;
