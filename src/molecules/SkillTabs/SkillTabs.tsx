import React from 'react';
import { CategoryKey, categoryLabels } from '../../utils/skills';
import './skillTabs.css';

interface SkillTabsProps {
  categories: CategoryKey[];
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
}

export const SkillTabs: React.FC<SkillTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => (
  <nav className="skill-tabs" role="tablist" aria-label="Skill categories">
    {categories.map((category) => (
      <button
        key={category}
        className={`skill-tab ${activeCategory === category ? 'active' : ''}`}
        onClick={() => onCategoryChange(category)}
        role="tab"
        aria-selected={activeCategory === category}
        aria-controls={`${category}-panel`}
      >
        {categoryLabels[category]}
      </button>
    ))}
  </nav>
);


