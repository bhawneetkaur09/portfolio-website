import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import { AUTHOR_NAME, AUTHOR_DESCRIPTION, ABOUT_AUTHOR } from '../../utils/labels';
import './homePage.css';

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="hero-content">
        <h1 className="hero-title">Hi, I'm {AUTHOR_NAME}</h1>
        <p className="hero-subtitle">{AUTHOR_DESCRIPTION}</p>
        <section className="about-author">
          {ABOUT_AUTHOR.map((line, index) => (
            <p key={index} className="about-line" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>{line}</p>
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