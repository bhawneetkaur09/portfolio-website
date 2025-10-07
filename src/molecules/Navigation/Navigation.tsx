import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';

interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

interface NavigationProps {
  items: NavigationItem[];
  onItemClick?: () => void;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  onItemClick,
  className = ''
}) => {
  const location = useLocation();

  const isActiveRoute = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <nav className={`navigation ${className}`}>
      {items.map(({ id, label, path }) => (
        <Link
          key={id}
          to={path}
          className={`nav-link ${isActiveRoute(path) ? 'active' : ''}`}
          onClick={onItemClick}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};


