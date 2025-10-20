import React, { useEffect } from 'react';
import './App.css';
// ThemeProvider removed per request; app uses default styles only
import DockNav from './molecules/DockNav/DockNav';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

const App: React.FC = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main.App-main > section')) as HTMLElement[];

    // Initialize transition state
    sections.forEach((s, idx) => {
      s.classList.add('section-transition');
      if (idx === 0) s.classList.add('is-active');
    });

    let lastActive: HTMLElement | null = sections[0] ?? null;

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const nextActive = visible.target as HTMLElement;
        if (lastActive === nextActive) return;

        if (lastActive) {
          lastActive.classList.remove('is-active');
          lastActive.classList.add('is-leaving');
          // Remove leaving state after transition completes
          const handle = () => {
            lastActive && lastActive.classList.remove('is-leaving');
            lastActive && lastActive.removeEventListener('transitionend', handle);
          };
          lastActive.addEventListener('transitionend', handle);
        }

        nextActive.classList.add('is-active');
        lastActive = nextActive;
      },
      { threshold: [0.4, 0.6, 0.8] }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
        <main className="App-main">
          <section id="home">
            <HomePage />
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="projects">
            <ProjectsPage />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
        </main>
        <DockNav />
      </div>
  );
};

export default App;