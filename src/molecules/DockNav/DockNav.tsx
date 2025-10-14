import React, { useEffect, useState } from 'react';
import './dockNav.css';
import { navItems } from '../../utils/labels';

interface DockItem {
  id: string;
  label: string;
  targetId: string;
}

const items: DockItem[] = navItems.map(({ id, label }) => ({ id, label, targetId: id }));

export const DockNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        threshold: [0.4, 0.6, 0.8],
      }
    );

    items.forEach((i) => {
      const el = document.getElementById(i.targetId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (targetId: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const Icon: React.FC<{ id: string }> = ({ id }) => {
    const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
    switch (id) {
      case 'home':
        return (
          <svg {...common}>
            <path d="M3 11l9-7 9 7"/>
            <path d="M9 22V12h6v10"/>
          </svg>
        );
      case 'about':
        return (
          <svg {...common}>
            <circle cx="12" cy="8" r="4"/>
            <path d="M20 21a8 8 0 0 0-16 0"/>
          </svg>
        );
      case 'projects':
        return (
          <svg {...common}>
            <rect x="3" y="4" width="18" height="14" rx="2"/>
            <path d="M3 10h18"/>
          </svg>
        );
      case 'contact':
        return (
          <svg {...common}>
            <path d="M4 4h16v16H4z"/>
            <path d="M22 6l-10 7L2 6"/>
          </svg>
        );
      default:
        return (
          <svg {...common}>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        );
    }
  };

  return (
    <div className="dock">
      <div className="dock-inner">
        {items.map((i) => {
          const isActive = activeId === i.targetId;
          return (
            <button
              key={i.id}
              className={`dock-item ${isActive ? 'active' : ''}`}
              onClick={handleClick(i.targetId)}
              aria-label={i.label}
              aria-current={isActive ? 'page' : undefined}
              title={i.label}
            >
              <Icon id={i.id} />
              <span className="dock-label">{i.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DockNav;

