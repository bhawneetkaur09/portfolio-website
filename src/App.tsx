import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './molecules/ThemeToggle/ThemeToggle';
import DockNav from './molecules/DockNav/DockNav';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
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
    </ThemeProvider>
  );
};

export default App;