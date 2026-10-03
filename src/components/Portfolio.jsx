import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import * as SimpleIcons from "react-icons/si";
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';

const projects = [
  {
    title: 'ESP32 Multimedia Player', company: 'Embedded / IoT', url: 'https://github.com/luckyabdillah/esp32-multimedia', img: 'https://opengraph.githubassets.com/1/luckyabdillah/esp32-multimedia',
    description: 'A standalone ESP32-WROOM-32 multimedia player that synchronizes GIF animation on an ST7789 display with WAV playback through an I2S amplifier.',
    details: ['Full-screen 240x240 GIF playback on ST7789 TFT', '16-bit mono/stereo WAV playback through I2S', 'Automatic GIF and WAV pairing from SD card filenames', 'Dual-core playback to keep animation smooth', 'Mutex-protected SD access and button-controlled randomization'],
    externalLinks: [
      { name: 'Featured Video', url: 'https://www.instagram.com/p/DdtdyelKI-A/', source: 'Instagram' },
      { name: 'Repository', url: 'https://github.com/luckyabdillah/esp32-multimedia', source: 'GitHub' },
    ],
  },
  {
    title: 'Structural Health Monitoring System', company: '', url: 'https://structural-health-monitoring-one.vercel.app', img: '/img/structural-health-monitoring.png',
    description: 'Web-based application for monitoring and analyzing the structural integrity of buildings using IoT sensors and data visualization. Enables real-time monitoring, data analysis, and alerting for structural health assessment.',
    details: ['Real-time data acquisition from IoT sensors', 'Interactive data visualization dashboards', 'Automated alert system for structural anomalies', 'Real-time chart updates'],
    externalLinks: [
      { name: 'Repository', url: 'https://github.com/luckyabdillah/structural-health-monitoring', source: 'GitHub' },
      { name: 'SHM Sensor Repository', url: 'https://github.com/luckyabdillah/shm-sensor-esp32', source: 'GitHub' },
      { name: 'Live Demo', url: 'https://structural-health-monitoring-one.vercel.app', source: 'Vercel' },
    ],
  },
  {
    title: 'B2B Travel Platform', company: 'MARHABA WEFADA', url: 'https://marhabawefada.sa', img: '/img/marhabawefada-id.png',
    description: 'Comprehensive platform enabling travel agents to create, customize, and book tailored land arrangement packages with integrated commission management and white-label distribution.',
    details: ["CMS Dashboard for Admin to manage service's price and suppliers", 'SMTP Relay Service integrated using Brevo for Customer Notification', 'Service-based commission for Travel Agency / Sales Agent', 'White-label distribution with customizable quotation and invoice', 'Passport reader and face recognition tools'],
  },
  {
    title: 'Indonesian Quotes API', company: 'Open source', url: 'https://github.com/luckyabdillah/indonesian-quotes-api', img: 'https://opengraph.githubassets.com/1/luckyabdillah/indonesian-quotes-api',
    description: 'Open-source API providing free access to a curated collection of inspirational Indonesian quotes. Supports retrieval by category, ID, and random selection, with options for users to submit their own quotes.',
    details: ['Get all quotes', 'Get all quotes by category', 'Get quotes by ID', 'Get random quotes', 'Get random quotes by category', 'Submit own quotes'],
    externalLinks: [
      { name: 'Repository', url: 'https://github.com/luckyabdillah/indonesian-quotes-api', source: 'GitHub' },
      { name: 'Live Demo', url: 'https://indonesian-quotes-api.vercel.app', source: 'Vercel' },
    ],
  },
  {
    title: 'Alju Shoes Clean', company: 'Alju Shoes', url: 'https://aljushoesclean.com', img: '/img/aljushoesclean.png',
    description: 'E-commerce solution for premium shoe cleaning and maintenance services. Enables customers to book services, track orders, and access shoe care tips through a user-friendly online platform.',
    details: ['Product catalog with detailed specifications', 'Online booking system', 'Geocoding API integrated using distancematrix.ai', 'Distance Matrix API for calculating actual distance', 'WhatsApp API integrated using fonnte Indonesia'],
  },
  {
    title: 'AudioLDM API', company: 'Open source', url: 'https://github.com/luckyabdillah/audioldm-api', img: 'https://opengraph.githubassets.com/1/luckyabdillah/audioldm-api',
    description: 'A Flask API for generating audio effects with AudioLDM v1, including prompt translation, background processing, language detection, enhancement, and WAV file delivery.',
    details: ['Background processing for audio generation', 'AudioLDM v1 and NLLB model integration', 'Automatic language detection with configurable fallback', 'WAV output served through a public media URL', 'Health check, CORS, and Gunicorn deployment support'],
  },
  {
    title: 'Restaurant ERP System', company: '', url: 'https://restaurant-erp.luckyabdillah.com', img: '/img/restaurant-erp.png',
    description: 'All-in-one web application for comprehensive restaurant management, from operations to accounting.',
    details: ['Web-based POS application', 'Market analysis chart', 'Logistic & Stock Opname', 'Finance & Accounting', 'Employee Affairs & Payroll'],
  },
  {
    title: 'Sistem Pelayanan BNN Provinsi Jatim', company: 'BNN Provinsi Jatim', url: 'https://simpelbnnpjatim.com', img: '/img/simpelbnnpjatim.png',
    description: 'Restructuring of the BNN service system website to enhance user experience and service efficiency.',
    details: ['Layanan permohonan: Sosialisasi, Audiensi, Asesmen Terpadu, Tes Urine', 'Layanan rehabilitasi pribadi & instansi', 'Layanan pengaduan'],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const getSourceIcon = (source) => {
    if (!source) return ExternalLink;

    const iconName = `Si${source.charAt(0).toUpperCase()}${source.slice(1).toLowerCase()}`;

    return SimpleIcons[iconName] ?? ExternalLink;
  };

  return (
    <section id="portfolio" className="section-padding bg-dark-light">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mx-auto mb-16 max-w-4xl">
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light"><span className="h-px w-10 bg-primary-light" /> Selected work</div>
          <h3 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">A few things I&apos;ve helped bring into the world.</h3>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">From sensor dashboards to travel operations, these are products shaped around real constraints and real people.</p>
        </motion.div>

        <div className="mx-auto mb-12 grid max-w-6xl gap-6 md:grid-cols-2">
          {projects.slice(0, showAll ? projects.length : 4).map((project, idx) => (
            <motion.button key={project.title} type="button" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="group cursor-pointer text-left" onClick={() => setSelectedProject(project)}>
              <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm card-hover h-full">
                <div className="relative overflow-hidden"><img src={project.img} alt={project.title} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"><div className="flex items-center gap-2 text-xl font-semibold text-white">View project <ExternalLink className="h-5 w-5" /></div></div></div>
                <div className="flex flex-col justify-between p-6 md:p-8"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{String(idx + 1).padStart(2, '0')} / {project.company || 'Independent build'}</p><h5 className="mb-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">{project.title}</h5><p className="line-clamp-3 text-muted-foreground">{project.description}</p></div><p className="mt-8 flex items-center gap-2 text-sm font-medium text-primary-light">Open case study <ExternalLink className="h-4 w-4" /></p></div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={() => setShowAll((value) => !value)} className="rounded-full px-8 py-5">{showAll ? 'Show Less' : 'Show More'}</Button>
        </div>

        <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-h-[90vh] max-w-4xl overflow-hidden p-0">
              <div className="-mx-4 no-scrollbar max-h-[75vh] overflow-y-auto">
                <div className="relative flex w-full items-center justify-center overflow-hidden bg-muted">
                  <img src={selectedProject.img} alt={selectedProject.title} className="h-full w-full object-contain" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-5 left-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 drop-shadow-sm sm:left-10">
                    Project {String(projects.indexOf(selectedProject) + 1).padStart(2, '0')}
                  </p>
                </div>
                <div className="p-6 px-8 sm:p-8 sm:px-10">
                  <div className="mb-7 max-w-2xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">{selectedProject.company || 'Independent build'}</p>
                    <DialogTitle className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="mt-4 text-base leading-relaxed">{selectedProject.description}</DialogDescription>
                  </div>
                  <div className="border-y border-border py-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">What it includes</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {selectedProject.details.map((detail) => <li key={detail} className="flex items-start gap-2 text-sm leading-relaxed text-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />{detail}</li>)}
                    </ul>
                  </div>
                  {selectedProject.externalLinks && (
                    <div className="border-b border-border py-5">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">External links</p>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {selectedProject.externalLinks.map((link) => {
                          const SourceIcon = getSourceIcon(link.source);
                          return (
                            <li key={link.url} className="flex items-center gap-2 text-sm leading-relaxed text-foreground">
                              <SourceIcon className="h-4 w-4 shrink-0 text-primary-light" />
                              <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{link.name}</a>
                              <span className="text-xs text-muted-foreground">
                                ({link.source})
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 p-6 pt-3 sm:p-8 sm:pt-3">
                <Button render={<a href={selectedProject.url} target="_blank" rel="noopener noreferrer" />} className="rounded-full py-4 px-4">Visit website</Button><Button onClick={() => setSelectedProject(null)} variant="outline" className="rounded-full py-4">Close</Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;