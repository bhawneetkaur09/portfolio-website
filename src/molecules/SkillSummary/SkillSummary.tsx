import React from 'react';
import { skillCategories, CategoryKey, categoryLabels } from '../../utils/skills';
import './skillSummary.css';

export const SkillSummary: React.FC = () => (
  <aside className="skills-summary">
    <p>
      {(Object.keys(skillCategories) as CategoryKey[]).map((category) => (
        <React.Fragment key={category}>
          <strong>{categoryLabels[category]}:</strong>
          {' '}
          {skillCategories[category]
            .map(skill => skill.name)
            .join(', ')}
          <br />
        </React.Fragment>
      ))}
    </p>
  </aside>
);



