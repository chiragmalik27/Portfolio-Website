import React, { useState, useEffect, useRef } from 'react';
import { skills as allSkills } from '../data';

const SkillsSection: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const [visibleSkills, setVisibleSkills] = useState(allSkills);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
  ];

  useEffect(() => {
    if (category === 'all') {
      setVisibleSkills(allSkills);
    } else {
      const filtered = allSkills.filter(
        (skill) => skill.category.toLowerCase() === category.toLowerCase()
      );
      setVisibleSkills(filtered);
    }
  }, [category]);

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
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-dev-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dev-text-primary animate-on-scroll opacity-0">
            My Skills
          </h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary rounded mx-auto animate-on-scroll opacity-0"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-dev-text-secondary max-w-2xl mx-auto animate-on-scroll opacity-0">
            Technical skills and expertise developed over years of experience
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3 animate-on-scroll opacity-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat.id
                  ? 'bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary text-white'
                  : 'bg-gray-100 dark:bg-dev-dark-bg-secondary text-gray-700 dark:text-dev-text-primary hover:bg-gray-200 dark:hover:bg-dev-dark-bg-tertiary border border-gray-200 dark:border-dev-dark-bg-tertiary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-dev-dark-bg-secondary rounded-lg shadow-md p-6 border border-gray-200 dark:border-dev-dark-bg-tertiary hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dev-text-primary">
                  {skill.name}
                </h3>
                <span className="text-dev-accent-primary font-medium">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2 bg-gray-200 dark:bg-dev-dark-bg-tertiary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-dev-accent-primary to-dev-accent-secondary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
