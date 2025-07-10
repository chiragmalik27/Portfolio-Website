import React, { useEffect, useRef } from 'react';
import { aboutMe } from '../data';
import { Mail, MapPin, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white dark:bg-dev-dark-bg backdrop-blur-md bg-white/30 dark:bg-dev-dark-bg/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-dev-text-primary animate-on-scroll opacity-0">
            About Me
          </h2>
          <div className="mt-4 h-1 w-28 bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary rounded mx-auto animate-on-scroll opacity-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="p-8 rounded-xl bg-white dark:bg-dev-dark-bg-secondary shadow-lg animate-on-scroll opacity-0 border border-gray-200 dark:border-dev-dark-bg-tertiary">
            <h3 className="text-2xl font-semibold text-dev-accent-primary dark:text-dev-accent-primary mb-4">Get to know me</h3>

            <div className="space-y-5 text-gray-700 dark:text-dev-text-primary">
              {aboutMe.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-dev-accent-primary/10 dark:bg-dev-accent-primary/20 rounded-full text-dev-accent-primary">
                  <MapPin size={20} />
                </div>
                <span className="text-gray-700 dark:text-dev-text-primary">{aboutMe.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-dev-accent-primary/10 dark:bg-dev-accent-primary/20 rounded-full text-dev-accent-primary">
                  <Mail size={20} />
                </div>
                <a
                  href={`mailto:${aboutMe.email}`}
                  className="text-gray-700 dark:text-dev-text-primary hover:text-dev-accent-primary transition-colors"
                >
                  {aboutMe.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-dev-accent-primary/10 dark:bg-dev-accent-primary/20 rounded-full text-dev-accent-primary">
                  <Phone size={20} />
                </div>
                <a
                  href={`tel:${aboutMe.phone}`}
                  className="text-gray-700 dark:text-dev-text-primary hover:text-dev-accent-primary transition-colors"
                >
                  {aboutMe.phone}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary text-white font-medium rounded-lg hover:brightness-110 transition-shadow shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/17CnqStvNpeCWVPoPzAsQfB90MAxo52jY/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary text-white font-medium rounded-lg hover:brightness-110 transition-shadow shadow-md hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative h-80 w-80 lg:h-96 lg:w-96 mx-auto animate-on-scroll opacity-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-dev-accent-primary to-dev-accent-secondary rounded-full transform rotate-6 scale-105 blur-sm opacity-20 dark:opacity-10"></div>
            <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden border-4 border-dev-accent-primary dark:border-dev-accent-primary">
              <img
                src="https://i.ibb.co/2098qfz8/Mobile-Software.jpg"
                alt="Chirag"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
