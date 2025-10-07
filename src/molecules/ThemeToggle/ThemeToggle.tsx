import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './themeToggle.css';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb" data-theme={theme}>
          {theme === 'light' ? '☀️' : '🌙'}
        </div>
      </div>
    </button>
  );
};

