import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Blogs = () => {
  const blogs = [
    {
      title: 'Building Scalable Web Applications',
      description: 'Best practices for building scalable and maintainable web applications using modern frameworks.',
      date: 'Coming Soon',
      link: 'javascript:void(0)',
    },
    {
      title: 'Microservices Architecture',
      description: 'A comprehensive guide to designing and implementing microservices architecture.',
      date: 'Coming Soon',
      link: 'javascript:void(0)',
    },
    {
      title: 'Modern JavaScript Tips',
      description: 'Essential JavaScript patterns and techniques every developer should know.',
      date: 'Coming Soon',
      link: 'javascript:void(0)',
    },
  ];

  return (
    <section id="blogs" className="section-padding bg-dark-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h4 className="text-primary-light text-xl font-semibold mb-3">Insights</h4>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Blogs</h3>
          <p className="text-muted text-lg">
            Sharing knowledge and experiences from my journey in software development
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, idx) => (
            <motion.a
              key={idx}
              href={blog.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group block p-8 bg-dark rounded-2xl shadow-xl card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-primary-light text-sm font-medium">{blog.date}</span>
                <FiExternalLink className="text-primary-light text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                {blog.title}
              </h4>
              <p className="text-muted leading-relaxed">{blog.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
