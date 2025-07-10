import React from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { aboutMe } from '../data';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const backgroundCircles = [
    { color: 'rgba(56, 189, 248, 0.1)', size: 400, x: 20, y: 20 },  // Sky blue
    { color: 'rgba(99, 102, 241, 0.1)', size: 300, x: 80, y: 40 },   // Indigo
    { color: 'rgba(34, 197, 94, 0.1)', size: 350, x: 40, y: 70 },    // Green
    { color: 'rgba(245, 158, 11, 0.1)', size: 250, x: 70, y: 20 },   // Amber
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dev-dark-bg"
    >
      {/* Automatically moving blurry circles */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundCircles.map((circle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full blur-xl"
            style={{
              backgroundColor: circle.color,
              width: circle.size,
              height: circle.size,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
            }}
            animate={{
              x: [0, circle.size / 20, -circle.size / 25, 0],
              y: [0, -circle.size / 30, circle.size / 15, 0],
            }}
            transition={{
              duration: 30 + index * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-dev-text-primary/90 font-semibold tracking-wide text-lg"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-dev-text-primary"
          >
            {aboutMe.name}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-dev-accent-primary mt-4"
          >
            {aboutMe.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-dev-text-secondary"
          >
            {aboutMe.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-4 pt-4"
          >
            <motion.a 
              href={aboutMe.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dev-dark-bg-secondary/50 backdrop-blur-sm text-dev-text-primary hover:bg-dev-accent-primary/20 hover:text-dev-accent-primary transition-all border border-dev-dark-bg-tertiary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href={aboutMe.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dev-dark-bg-secondary/50 backdrop-blur-sm text-dev-text-primary hover:bg-dev-accent-primary/20 hover:text-dev-accent-primary transition-all border border-dev-dark-bg-tertiary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href={aboutMe.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dev-dark-bg-secondary/50 backdrop-blur-sm text-dev-text-primary hover:bg-dev-accent-primary/20 hover:text-dev-accent-primary transition-all border border-dev-dark-bg-tertiary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={20} />
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-12"
          >
            <motion.a 
              href="#about" 
              className="inline-flex items-center justify-center p-3 rounded-full bg-dev-dark-bg-secondary/50 backdrop-blur-sm text-dev-text-primary hover:bg-dev-accent-primary/20 hover:text-dev-accent-primary transition-all border border-dev-dark-bg-tertiary"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <ChevronDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;