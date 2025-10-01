import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../../utils/projects';
import './projectsPage.css';
import GreaterThanIcon from '../../assets/GreaterThanIcon';
import LessThanIcon from '../../assets/LessThanIcon';

const ProjectsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoPlayRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const autoPlay = () => {
      if (sliderRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    };

    autoPlayRef.current = autoPlay;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % projects.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNextSlide();
    }

    if (touchStart - touchEnd < -150) {
      handlePrevSlide();
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <main className="projects-page">
      <section className="projects-section">
        <h2 className="section-title">My Projects</h2>
        
        <div 
          className="slider-container"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <article className="project-slide">
            <figure className="project-image">
              <img src={currentProject.imageUrl} alt={currentProject.title} />
            </figure>
            
            <header className="project-content">
              <h3 className="project-title">{currentProject.title}</h3>
              <p className="project-description">{currentProject.description}</p>
              
              <ul className="project-technologies">
                {currentProject.technologies.map((tech, index) => (
                  <li key={index} className="technology-tag">{tech}</li>
                ))}
              </ul>
              
              <nav className="project-links">
                <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  Github
                </a>
                <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              </nav>
            </header>
          </article>
          
          <button className="slider-control prev" onClick={handlePrevSlide} aria-label="Previous project">
            <LessThanIcon/>
          </button>
          <button className="slider-control next" onClick={handleNextSlide} aria-label="Next project">
            <GreaterThanIcon/>
          </button>
          
          <nav className="slider-dots" aria-label="Project navigation">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </nav>
        </div>
        
        <output className="project-counter">
          <span className="current-project">{currentIndex + 1}</span>
          <span className="total-projects">/ {projects.length}</span>
        </output>
      </section>
    </main>
  );
};

export default ProjectsPage; 