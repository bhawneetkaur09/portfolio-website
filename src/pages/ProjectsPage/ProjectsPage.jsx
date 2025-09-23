// filepath: /Users/bhawneetkaur/Desktop/bhawneet-portfolio/portfolio/src/pages/ProjectsPage/ProjectsPage.jsx
import { useState, useEffect, useRef } from 'react';
import { projects } from '../../utils/projects';
import './projectsPage.css';
import GreaterThanIcon from '../../assets/GreaterThanIcon';
import LessThanIcon from '../../assets/LessThanIcon';

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

//   // Auto sliding functionality
  useEffect(() => {
    const autoPlay = () => {
      if (sliderRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    };

    autoPlayRef.current = autoPlay;
  }, []);

  // Set up auto play interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    }, 5000); // Change slide every 5 seconds

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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swipe left
      handleNextSlide();
    }

    if (touchStart - touchEnd < -150) {
      // Swipe right
      handlePrevSlide();
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="projects-page">
      <div className="container">
        <section className="projects-section">
          <h2 className="section-title">My Projects</h2>
          
          <div 
            className="slider-container"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="project-slider">
              <div className="project-slide">
                <div className="project-image">
                  <img src={currentProject.imageUrl} alt={currentProject.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{currentProject.title}</h3>
                  <p className="project-description">{currentProject.description}</p>
                  <div className="project-technologies">
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      Github
                    </a>
                    <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="slider-control prev" onClick={handlePrevSlide} aria-label="Previous project">
              <LessThanIcon/>
            </button>
            <button className="slider-control next" onClick={handleNextSlide} aria-label="Next project">
              <GreaterThanIcon/>
            </button>
            
            <div className="slider-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="project-counter">
            <span className="current-project">{currentIndex + 1}</span>
            <span className="total-projects">/ {projects.length}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;