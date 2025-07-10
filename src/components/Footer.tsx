import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { aboutMe } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dev-dark-bg text-dev-text-primary py-12 border-t border-dev-dark-bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-dev-text-primary">Chirag Malik</h3>
            <p className="text-dev-text-secondary max-w-xs">
              Professional full-stack developer specializing in creating
              elegant, functional, and user-friendly digital experiences.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href={aboutMe.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={aboutMe.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={aboutMe.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href={`mailto:${aboutMe.email}`}
                className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-dev-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-dev-text-secondary hover:text-dev-accent-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-dev-text-primary">Contact</h3>
            <ul className="space-y-3 text-dev-text-secondary">
              <li className="flex items-center space-x-3">
                <span>{aboutMe.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <a href={`mailto:${aboutMe.email}`} className="hover:text-dev-accent-primary transition-colors">
                  {aboutMe.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <a href={`tel:${aboutMe.phone}`} className="hover:text-dev-accent-primary transition-colors">
                  {aboutMe.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dev-dark-bg-tertiary mt-12 pt-8 text-center text-dev-text-secondary">
          <p>&copy; {currentYear} Chirag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;