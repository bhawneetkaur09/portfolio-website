import { useState } from 'react';
import { skillCategories } from '../../utils/skills';
import './aboutPage.css';

const AboutPage = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categoryLabels = {
    languages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend Exposure',
    testing: 'Testing',
    debugging: 'Debugging',
    tools: 'Tools/Infra'
  };

  return (
    <div className="about-page">
      <div className="container">
        <section className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="skills-section">
              <h3>Skills & Technologies</h3>
              
              {/* Category Tabs */}
              <div className="skill-tabs">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    className={`skill-tab ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {categoryLabels[category]}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="skills-grid">
                {skillCategories[activeCategory]?.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="skill-content">
                      <div className="skill-front">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-back">
                        <span className="skill-description">{skill.description}</span>
                        <span className="skill-experience">{skill.experience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Summary */}
              <div className="skills-summary">
                <p>
                  <strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3/Sass, SQL basics
                  <br />
                  <strong>Frontend:</strong> React 18, Next.js 14, Redux Toolkit, React Query, Zustand, React Hook Form, Styled Components, Tailwind CSS
                  <br />
                  <strong>Backend Exposure:</strong> Node.js basics, REST APIs, JSON, WebSockets, Postman, API debugging
                  <br />
                  <strong>Testing:</strong> Jest, React Testing Library, Cypress, Playwright, Storybook, Unit/Integration/E2E Testing
                  <br />
                  <strong>Debugging:</strong> Chrome DevTools, React DevTools, Network analysis, Kibana (ELK Stack), Splunk, DataDog, Performance profiling
                  <br />
                  <strong>Tools/Infra:</strong> Webpack, Vite, Gasket, Docker, Git, Jenkins, GitHub Actions, AWS (S3, CloudFront)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;