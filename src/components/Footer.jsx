import { FaHeart, FaPeace } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Lucky Abdillah. All rights reserved.
          </p>
          <p className="text-muted-foreground flex items-center gap-2">
            {/* Made with <FaPeace className="text-primary-light" /> and <FaHeart className="text-primary-light" />. */}
            Made with Peace and Love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
