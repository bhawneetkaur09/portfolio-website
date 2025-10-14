import React from 'react';
import { projects } from '../../utils/projects';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { PAGE_TITLES } from '../../utils/pageTitles';
import { Slider } from '../../molecules/Slider/Slider';
import './projectsPage.css';

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
  <article className="project-slide">
    <figure className="project-image">
      <img src={project.imageUrl} alt={project.title} />
    </figure>
    
    <header className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <ul className="project-technologies">
        {project.technologies.map((tech, index) => (
          <li key={index} className="technology-tag">{tech}</li>
        ))}
      </ul>
      
      <nav className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          Github
        </a>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          Live Demo
        </a>
      </nav>
    </header>
  </article>
);

const ProjectsPage: React.FC = () => {
  useDocumentTitle(PAGE_TITLES.projects);

  return (
    <main className="projects-page">
      <section className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <Slider
          items={projects}
          renderItem={(project) => <ProjectCard project={project} />}
          autoPlayInterval={5000}
        />
      </section>
    </main>
  );
};

export default ProjectsPage;