import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-dev-dark-bg/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-dev-accent-primary dark:text-dev-accent-primary">
              Chirag Malik
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-dev-text-primary hover:text-dev-accent-primary dark:hover:text-dev-accent-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dev-dark-bg-secondary hover:bg-gray-200 dark:hover:bg-dev-dark-bg-tertiary transition-colors text-gray-700 dark:text-dev-text-primary"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dev-dark-bg-secondary hover:bg-gray-200 dark:hover:bg-dev-dark-bg-tertiary transition-colors text-gray-700 dark:text-dev-text-primary"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-dev-text-primary hover:text-dev-accent-primary dark:hover:text-dev-accent-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-2 bg-white dark:bg-dev-dark-bg-secondary rounded-lg mt-2 border border-gray-200 dark:border-dev-dark-bg-tertiary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 dark:text-dev-text-primary hover:bg-gray-100 dark:hover:bg-dev-dark-bg-tertiary hover:text-dev-accent-primary dark:hover:text-dev-accent-primary rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex space-x-4 px-3 border-t border-gray-200 dark:border-dev-dark-bg-tertiary">
              <a
                href="https://github.com/Yubin935"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-dev-text-primary hover:text-dev-accent-primary dark:hover:text-dev-accent-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/yubin-b2327a255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-dev-text-primary hover:text-dev-accent-primary dark:hover:text-dev-accent-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://twitter.com/yubin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-dev-text-primary hover:text-dev-accent-primary dark:hover:text-dev-accent-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;