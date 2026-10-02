import { motion } from 'framer-motion';
import { createElement } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from './ui/button';

const socials = [
  { label: 'GitHub', Icon: FaGithub, href: 'https://github.com/luckyabdillah' },
  { label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/luckyabdillah' },
  { label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/luckyabdillahh' },
  { label: 'Email', Icon: FaEnvelope, href: 'mailto:luckyabdillah00@gmail.com' },
];

const Hero = () => (
  <section id="home" className="relative overflow-hidden border-b border-border px-6 pt-28 lg:pt-36">
    <div className="container relative mx-auto px-6 pb-16 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
            <span className="h-px w-10 bg-primary-light" /> Software engineer
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
            Hi, I&apos;m Lucky Abdillah.
          </h1>
          <p className="mt-7 max-w-xl text-xl leading-relaxed text-muted-foreground">
            I design and build web applications, internal tools, and APIs for teams solving practical problems.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button render={<a href="#portfolio" />} className="h-11 rounded-full px-5">
              View my work <ArrowDownRight />
            </Button>
            <Button render={<a href="#contact" />} variant="outline" className="h-11 rounded-full px-5">
              Get in touch <ArrowUpRight />
            </Button>
          </div>
          <div className="mt-10 flex gap-3">
            {socials.map(({ label, Icon, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary-light hover:text-primary-light">
                {createElement(Icon, { className: 'h-4 w-4' })}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative mx-auto w-full max-w-md lg:mr-0">
          <div className="absolute -inset-3 rounded-[2rem] border border-primary-light/30" />
          <div className="relative overflow-hidden rounded-[1.5rem] bg-muted">
            <img src="/img/lucky.png" alt="Lucky Abdillah" className="block w-full object-contain object-bottom" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Based in</p>
            <p className="mt-1 font-medium text-foreground">Indonesia · UTC+7</p>
          </div>
        </motion.div>
      </div>

      <motion.div id="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
        {[
          ['03+', 'years building'],
          ['20+', 'projects shipped'],
          ['6', 'domains explored'],
          ['Open', 'to meaningful work'],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;