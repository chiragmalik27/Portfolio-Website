import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { aboutMe } from '../data';

const ContactSection: React.FC = () => {
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
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white dark:bg-dev-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dev-text-primary animate-on-scroll opacity-0">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary rounded mx-auto animate-on-scroll opacity-0"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-dev-text-secondary max-w-2xl mx-auto animate-on-scroll opacity-0">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0">
            <div className="bg-gray-50 dark:bg-dev-dark-bg-secondary rounded-lg p-8 h-full border border-gray-200 dark:border-dev-dark-bg-tertiary">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-dev-text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-dev-accent-primary/10 dark:bg-dev-accent-primary/20 text-dev-accent-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-dev-text-primary">Location</h4>
                    <p className="text-gray-600 dark:text-dev-text-secondary mt-1">{aboutMe.location}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-dev-accent-primary/10 dark:bg-dev-accent-primary/20 text-dev-accent-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-dev-text-primary">Email</h4>
                    <a href={`mailto:${aboutMe.email}`} className="text-gray-600 dark:text-dev-text-secondary hover:text-dev-accent-primary transition-colors mt-1 block">
                      {aboutMe.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-dev-accent-primary/10 dark:bg-dev-accent-primary/20 text-dev-accent-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-dev-text-primary">Phone</h4>
                    <a href={`tel:${aboutMe.phone}`} className="text-gray-600 dark:text-dev-text-secondary hover:text-dev-accent-primary transition-colors mt-1 block">
                      {aboutMe.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-900 dark:text-dev-text-primary mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {aboutMe.social.github && (
                    <a href={aboutMe.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-dev-dark-bg-tertiary text-gray-700 dark:text-dev-text-secondary hover:bg-dev-accent-primary hover:text-white transition-colors" aria-label="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {aboutMe.social.linkedin && (
                    <a href={aboutMe.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-dev-dark-bg-tertiary text-gray-700 dark:text-dev-text-secondary hover:bg-dev-accent-primary hover:text-white transition-colors" aria-label="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {aboutMe.social.twitter && (
                    <a href={aboutMe.social.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-dev-dark-bg-tertiary text-gray-700 dark:text-dev-text-secondary hover:bg-dev-accent-primary hover:text-white transition-colors" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll opacity-0">
            <div className="bg-white dark:bg-dev-dark-bg-secondary rounded-lg shadow-md p-8 border border-gray-200 dark:border-dev-dark-bg-tertiary">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-dev-text-primary mb-6">
                Send Me a Message
              </h3>
              <form
                action="https://formspree.io/f/manjnveo"
                method="POST"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dev-text-secondary mb-1">Your Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 dark:border-dev-dark-bg-tertiary rounded-lg bg-white dark:bg-dev-dark-bg text-gray-900 dark:text-dev-text-primary focus:ring-2 focus:ring-dev-accent-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dev-text-secondary mb-1">Your Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-dev-dark-bg-tertiary rounded-lg bg-white dark:bg-dev-dark-bg text-gray-900 dark:text-dev-text-primary focus:ring-2 focus:ring-dev-accent-primary focus:border-transparent" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-dev-text-secondary mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 dark:border-dev-dark-bg-tertiary rounded-lg bg-white dark:bg-dev-dark-bg text-gray-900 dark:text-dev-text-primary focus:ring-2 focus:ring-dev-accent-primary focus:border-transparent" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dev-text-secondary mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 dark:border-dev-dark-bg-tertiary rounded-lg bg-white dark:bg-dev-dark-bg text-gray-900 dark:text-dev-text-primary resize-none focus:ring-2 focus:ring-dev-accent-primary focus:border-transparent" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary text-white font-medium rounded-lg hover:brightness-110 transition-shadow shadow-md hover:shadow-lg">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
