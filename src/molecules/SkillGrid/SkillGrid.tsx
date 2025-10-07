import React from 'react';
import { Skill } from '../../utils/skills';
import './skillGrid.css';

interface SkillGridProps {
  skills: Skill[];
  categoryId: string;
}

export const SkillGrid: React.FC<SkillGridProps> = ({ skills, categoryId }) => (
  <ul className="skills-grid" role="tabpanel" id={`${categoryId}-panel`}>
    {skills.map((skill, index) => (
      <li
        key={skill.name}
        className="skill-item"
        style={{
          animationDelay: `${index * 0.1}s`
        }}
      >
        <div className="skill-content">
          <div className="skill-front">
            <span className="skill-name">{skill.name}</span>
          </div>
          <div className="skill-back">
            <span className="skill-description">{skill.description}</span>
            <span className="skill-experience">{skill.experience}</span>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

