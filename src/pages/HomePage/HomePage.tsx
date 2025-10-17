import React, { useEffect, useState } from "react";
import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
import {
  AUTHOR_NAME,
  AUTHOR_DESCRIPTION,
  ABOUT_AUTHOR,
  GREETING,
} from "../../utils/labels";
import "./homePage.css";

const HomePage: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setShowAbout(true);
      }
    };
    // In case user lands mid-page or refreshes
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="home-page">
      <section className="hero-content">
        <h1 className="hero-title">
          {GREETING} {AUTHOR_NAME}
        </h1>
        <p className="hero-subtitle">{AUTHOR_DESCRIPTION}</p>
        {showAbout && (
          <section className="about-author" aria-hidden={!showAbout}>
            {ABOUT_AUTHOR.map((line: string, index: number) => (
              <p key={index} className="about-line">
                {line}
              </p>
            ))}
          </section>
        )}
        <footer className="hero-cta">
          <SocialLinks />
        </footer>
      </section>
    </main>
  );
};

export default HomePage;
