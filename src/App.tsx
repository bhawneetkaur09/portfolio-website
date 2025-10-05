import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './organisms/Header/Header';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './molecules/ThemeToggle/ThemeToggle';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage/ContactPage'));

// Loading component for suspense fallback
const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <ThemeToggle />
          <Suspense fallback={<LoadingSpinner />}>
            <main className="App-main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;