import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiPhp, SiLaravel, SiMysql, SiPostgresql, SiMongodb, SiDocker, SiGit, SiTailwindcss, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiExpress, SiKotlin, SiSwift, SiCss3, SiHtml5, SiBootstrap, SiGraphql, SiRedis, SiJenkins, SiAmazon, SiGooglecloud, SiCplusplus, SiJquery, SiFirebase, SiVercel, SiGithub, SiArduino, SiRaspberrypi, SiJouav, SiVite, SiLinux, SiNginx, SiEspressif, SiSqlite, SiPostman, SiJsonwebtokens, SiSass, SiSelenium, SiNextui, SiDaisyui, SiEjs, SiCodeigniter, SiFlutter, SiShadcnui, SiDjango, SiSpring, SiSpringboot, SiFlask } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';

const Tech = () => {
  const [activeTab, setActiveTab] = useState('Language');

  const techGroups = {
    'Language': [
      { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Python', Icon: SiPython, color: 'text-blue-400' },
      { name: 'Java', Icon: BiLogoJava, color: 'text-red-600' },
      { name: 'C++', Icon: SiCplusplus, color: 'text-blue-700' },
      { name: 'Flutter', Icon: SiFlutter, color: 'text-cyan-400' },
      { name: 'PHP', Icon: SiPhp, color: 'text-indigo-400' },
      // { name: 'Kotlin', Icon: SiKotlin, color: 'text-purple-500' },
    //   { name: 'Swift', Icon: SiSwift, color: 'text-orange-500' },
    ],
    'Frontend': [
      { name: 'React', Icon: SiReact, color: 'text-cyan-400' },
    //   { name: 'Vue.js', Icon: SiVuedotjs, color: 'text-green-400' },
    //   { name: 'Nuxt', Icon: SiNuxtdotjs, color: 'text-green-500' },
      { name: 'Vite', Icon: SiVite, color: 'text-purple-400' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'shadcn/ui', Icon: SiShadcnui, color: 'text-black-400' },
      { name: 'Next.js', Icon: SiNextdotjs, color: 'text-white' },
      { name: 'NextUI', Icon: SiNextui, color: 'text-gray-400' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: 'text-purple-600' },
      { name: 'EJS', Icon: SiEjs, color: 'text-yellow-600' },
      // { name: 'SASS', Icon: SiSass, color: 'text-pink-500' },
      // { name: 'jQuery', Icon: SiJquery, color: 'text-blue-400' },
      // { name: 'HTML5', Icon: SiHtml5, color: 'text-orange-600' },
      // { name: 'CSS3', Icon: SiCss3, color: 'text-blue-600' },
    ],
    'Backend': [
      { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Django', Icon: SiDjango, color: 'text-black-600' },
      { name: 'Firebase', Icon: SiFirebase, color: 'text-yellow-400' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: 'text-green-700' },
      { name: 'Flask', Icon: SiFlask, color: 'text-black-400' },
      { name: 'Laravel', Icon: SiLaravel, color: 'text-red-500' },
      { name: 'Express.js', Icon: SiExpress, color: 'text-gray-400' },
      // { name: 'GraphQL', Icon: SiGraphql, color: 'text-pink-500' },
      // { name: 'JWT Auth', Icon: SiJsonwebtokens, color: 'text-blue-500' },
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
    <section id="tech" className="section-padding bg-dark px-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
              <span className="h-px w-10 bg-primary-light" /> Toolkit
            </p>
            <h3 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">Tools I reach for often.</h3>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
            A practical stack shaped by the products I build: reliable backends, thoughtful interfaces, and the infrastructure that connects them.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 sm:grid-cols-3 lg:block lg:space-y-2">
            {Object.keys(techGroups).map((tab) => (
              <TabsTrigger key={tab} value={tab} className="!h-auto !flex-none justify-between rounded-lg border border-border bg-dark-lighter px-3 py-3 text-left text-xs font-medium text-muted-foreground transition-all data-[state=active]:border-primary-light data-[state=active]:bg-primary-light data-[state=active]:text-dark sm:px-4 sm:text-sm lg:w-full">
                <span>{tab}</span>
                <span className="ml-6 text-xs opacity-60">{String(techGroups[tab].length).padStart(2, '0')}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(techGroups).map(([tab, technologies]) => (
            <TabsContent key={tab} value={tab} className="mt-0 rounded-2xl border border-border bg-dark-lighter p-5 md:p-8">
              <div className="mb-6 flex items-end justify-between border-b border-border pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Category</p>
                  <h4 className="mt-2 text-2xl font-semibold text-foreground">{tab}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{technologies.length} technologies</p>
              </div>
              <div className="grid gap-x-8 md:grid-cols-2">
                {technologies.map((tech, idx) => (
                  <motion.div key={`${tab}-${idx}`} whileHover={{ x: 4 }} className="flex items-center justify-between border-b border-border/70 py-4">
                    <div className="flex items-center gap-3">
                      <tech.Icon className={`text-2xl ${tech.color}`} />
                      <span className="font-medium text-foreground">{tech.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{String(idx + 1).padStart(2, '0')}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Tech;
