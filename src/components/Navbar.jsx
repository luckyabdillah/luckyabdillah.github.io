import { useState } from 'react';
import { Code2, Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = ({ darkMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tech', href: '#tech' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed z-50 w-full border-b border-border bg-dark/90 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo - GitHub Icon */}
          <a
            href="https://github.com/luckyabdillah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-primary-light"
          >
            <Code2 className="h-7 w-7" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-foreground transition-colors duration-300 hover:text-primary-light"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-lg" onClick={onToggleTheme} aria-label="Toggle theme">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon-lg" onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-medium text-foreground transition-all duration-300 hover:pl-4 hover:text-primary-light"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
