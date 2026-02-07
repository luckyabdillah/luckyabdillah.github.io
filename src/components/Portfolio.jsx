import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const projects = [
    {
      title: 'Structural Health Monitoring System',
      company: '',
      url: 'https://structural-health-monitoring-one.vercel.app',
      description: 'Web-based application for monitoring and analyzing the structural integrity of buildings using IoT sensors and data visualization.',
      img: '/img/structural-health-monitoring.png',
      details: [
        'Real-time data acquisition from IoT sensors',
        'Interactive data visualization dashboards',
        'Automated alert system for structural anomalies',
        'Real-time chart updates'
      ],
    },
    {
      title: 'B2B Travel Platform',
      company: 'MARHABA WEFADA',
      url: 'https://marhabawefada.sa',
      description: 'Comprehensive platform enabling travel agents to create, customize, and book tailored land arrangement packages.',
      img: '/img/marhabawefada-id.png',
      details: [
        'CMS Dashboard for Admin to manage service\'s price and suppliers',
        'SMTP Relay Service integrated using Brevo for Customer Notification',
        'Service-based commission for Travel Agency / Sales Agent',
        'White-label distribution with customizable quotation and invoice',
        'Passport reader and face recognition tools',
      ],
    },
    {
      title: 'Alju Shoes Clean',
      company: '',
      url: 'https://aljushoesclean.com',
      description: 'E-commerce solution for premium shoe cleaning and maintenance services.',
      img: '/img/aljushoesclean.png',
      details: [
        'Product catalog with detailed specifications',
        'Online booking system',
        'Geocoding API integrated using distancematrix.ai to translate raw address to earth coordinates',
        'Distance Matrix API using distancematrix.ai to calculate actual distance between origins and destinations.',
        'WhatsApp API integrated using fonnte Indonesia',
      ],
    },
    {
      title: 'Indonesian Quotes API',
      company: '',
      url: 'https://indonesian-quotes-api.vercel.app',
      description: 'Open-source API providing free access to a curated collection of inspirational Indonesian quotes.',
      img: '/img/indonesian-quotes-api.png',
      details: [
        'Get all quotes',
        'Get all quotes by category',
        'Get quotes by ID',
        'Get random quotes',
        'Get random quotes by category',
        'Submit own quotes',
      ],
    },
    {
      title: 'Restaurant ERP System',
      company: '',
      url: 'https://restaurant-erp.luckyabdillah.com',
      description: 'All-in-one web application for comprehensive restaurant management, from operations to accounting.',
      img: '/img/restaurant-erp.png',
      details: [
        'Web-based POS application',
        'Market analysis chart',
        'Logistic & Stock Opname',
        'Finance & Accounting',
        'Employee Affairs & Payroll',
      ],
    },
    {
      title: 'Tracc',
      company: '',
      url: 'https://tracc.luckyabdillah.com',
      description: 'Tour & Travel Recording, Accounting, and Invoicing System for Business-to-Business (B2B) transaction.',
      img: '/img/tracc.png',
      details: [
        'Tour & Travel Recording System',
        'Accounting System',
        'Invoicing System',
        'Expense Management',
        'Financial Reporting',
      ],
    },
    {
      title: 'Sistem Pelayanan BNN Provinsi Jatim',
      company: '',
      url: 'https://simpelbnnpjatim.com',
      description: 'Restructuring of the BNN service system website to enhance user experience and service efficiency.',
      img: '/img/simpelbnnpjatim.png',
      details: [
        'Layanan permohonan: (Sosialisasi, Audiensi, Asesmen Terpadu, Tes Urine Pribadi & Instansi)',
        'Layanan rehabilitasi: Pribadi & Instansi',
        'Layanan pengaduan',
      ],
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h4 className="text-primary-light text-xl font-semibold mb-3">Portfolio</h4>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Projects</h3>
          <p className="text-muted text-lg">
            Explore my portfolio of innovative projects. Each one represents my passion for solving real-world problems with elegant code.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.slice(0, showAll ? projects.length : 4).map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-dark-lighter shadow-xl card-hover">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-white text-xl font-semibold flex items-center gap-2">
                      View Project <FiExternalLink />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h5 className="text-xl font-bold text-white mb-2">
                    {project.title}
                    {project.company && (
                      <span className="text-primary-light"> | {project.company}</span>
                    )}
                  </h5>
                  <p className="text-muted line-clamp-2">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline text-lg px-8 py-3"
            >
              Show More
            </button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(false)}
              className="btn-outline text-lg px-8 py-3"
            >
              Show Less
            </button>
          </motion.div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-lighter rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-y-auto scrollbar-custom-inner flex-1 p-4 sm:p-8">
                <div className="mx-auto w-full max-w-[640px]">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-xl mb-4 sm:mb-6"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.company && (
                    <p className="text-primary-light text-lg sm:text-xl mb-3 sm:mb-4">
                      {selectedProject.company}
                    </p>
                  )}
                  <p className="text-muted mb-5 sm:mb-6 text-sm sm:text-base">
                    {selectedProject.description}
                  </p>
                  <div className="flex mb-6">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Visit Website <FiExternalLink />
                    </a>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-left text-sm sm:text-base">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="text-muted flex items-start gap-3">
                        <span className="text-primary-light mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-outline mt-8 w-full"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
