import React, { useState } from 'react';
import { skillCategories, CategoryKey } from '../../utils/skills';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { PAGE_TITLES } from '../../utils/pageTitles';
import { SkillTabs } from '../../molecules/SkillTabs/SkillTabs';
import { SkillGrid } from '../../molecules/SkillGrid/SkillGrid';
import { SkillSummary } from '../../molecules/SkillSummary/SkillSummary';
import './aboutPage.css';

const AboutPage: React.FC = () => {
  useDocumentTitle(PAGE_TITLES.about);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('languages');
  const categories = Object.keys(skillCategories) as CategoryKey[];

  return (
    <main className="about-page">
      <section className="about-section">
        <h2 className="section-title">About Me</h2>
        <article className="skills-section">
          <h3>Skills & Technologies</h3>
          
          <SkillTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <SkillGrid
            skills={skillCategories[activeCategory]}
            categoryId={activeCategory}
          />

          <SkillSummary />
        </article>
      </section>
    </main>
  );
};

export default AboutPage;