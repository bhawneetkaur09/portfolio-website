import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AUTHOR_NAME, navItems } from '../../utils/labels';
import { Navigation } from '../../molecules/Navigation/Navigation';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import CrossIcon from '../../assets/CrossIcon';
import HamburgerIcon from '../../assets/HamburgerIcon';
import './header.css';

const navigationItems = navItems.map(({ id, label }) => ({
  id,
  label,
  path: id === 'home' ? '/' : `/${id}`
}));

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { scrollProgress, isScrolled } = useScrollProgress();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          {AUTHOR_NAME}
        </Link>
        
        <Navigation 
          items={navigationItems}
          onItemClick={closeMenu}
          className={isMenuOpen ? 'nav-open' : ''}
        />

        <div className="header-actions">
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CrossIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};