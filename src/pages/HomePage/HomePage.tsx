import React from 'react';
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { PAGE_TITLES } from '../../utils/pageTitles';
import {
  AUTHOR_NAME,
  AUTHOR_DESCRIPTION,
  ABOUT_AUTHOR,
  GREETING,
} from "../../utils/labels";
import "./homePage.css";

const HomePage: React.FC = () => {
  useDocumentTitle(PAGE_TITLES.home);

  return (
    <main className="home-page">
      <section className="hero-content">
        <h1 className="hero-title">
          {GREETING} {AUTHOR_NAME}
        </h1>
        <p className="hero-subtitle">{AUTHOR_DESCRIPTION}</p>
        <section className="about-author">
          {ABOUT_AUTHOR.map((line: string, index: number) => (
            <p key={index} className="about-line">
              {line}
            </p>
          ))}
        </section>
        <footer className="hero-cta">
          <SocialLinks />
        </footer>
      </section>
    </main>
  );
};

export default HomePage;