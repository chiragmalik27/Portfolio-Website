import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Filter only projects with category "Show Projects"
  const visibleProjects = projects.filter(project => project.category === 'Show Projects');

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
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-dev-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dev-text-primary animate-on-scroll opacity-0">
            My Projects
          </h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary rounded mx-auto animate-on-scroll opacity-0"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-dev-text-secondary max-w-2xl mx-auto animate-on-scroll opacity-0">
            Explore my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-dev-dark-bg-secondary rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg animate-on-scroll opacity-0 border border-gray-200 dark:border-dev-dark-bg-tertiary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-dev-text-primary">
                    {project.title}
                  </h3>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-dev-accent-primary/10 dark:bg-dev-accent-primary/20 text-dev-accent-primary rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-dev-text-secondary line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dev-dark-bg-tertiary text-gray-700 dark:text-dev-text-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-dev-accent-primary hover:text-dev-accent-secondary transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-700 dark:text-dev-text-secondary hover:text-dev-accent-primary transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
