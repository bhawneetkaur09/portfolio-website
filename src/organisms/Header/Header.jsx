import { AUTHOR_NAME, navItems } from "../../utils/labels"
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import CrossIcon from "../../assets/CrossIcon";
import HamburgerIcon from "../../assets/HamburgerIcon";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getRoutePath = (id) => {
    return id === 'home' ? '/' : `/${id}`;
  };

  const isActiveRoute = (id) => {
    const routePath = getRoutePath(id);
    return location.pathname === routePath;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          {AUTHOR_NAME}
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map(({ id, label }) => (
            <Link
              key={id}
              to={getRoutePath(id)}
              className={`nav-link ${isActiveRoute(id) ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>

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
  )
}