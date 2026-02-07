import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-center md:text-left">
            © {new Date().getFullYear()} Lucky Abdillah. All rights reserved.
          </p>
          <p className="text-muted flex items-center gap-2">
            Made with <FaHeart className="text-primary-light" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
