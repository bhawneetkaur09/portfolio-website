import React from 'react';
import './App.css';
// ThemeProvider removed per request; app uses default styles only
import DockNav from './molecules/DockNav/DockNav';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

const App: React.FC = () => {
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