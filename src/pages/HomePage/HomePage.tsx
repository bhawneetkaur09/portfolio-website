import SocialLinks from "../../molecules/SocialLinks/SocialLinks";
import {
  AUTHOR_NAME,
  AUTHOR_DESCRIPTION,
  ABOUT_AUTHOR,
  GREETING,
} from "../../utils/labels";
import "./homePage.css";

const HomePage = () => {
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
