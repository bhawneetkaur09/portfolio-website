import React from 'react';
import FacebookIcon from '../../assets/FacebookIcon';
import InstagramIcon from '../../assets/InstagramIcon';
import LinkedinIcon from '../../assets/LinkedinIcon';
import MediumIcon from '../../assets/MediumIcon';
import './socialLinks.css';

interface SocialLink {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
  label: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/bhawneetkaur1309/',
      label: 'Visit Bhawneet Kaur on LinkedIn'
    },
    {
      icon: MediumIcon,
      url: 'https://medium.com/@bhawneetkaur015',
      label: 'Read Bhawneet Kaur\'s articles on Medium'
    },
    {
      icon: InstagramIcon,
      url: 'https://www.instagram.com/bhawneetkaur/',
      label: 'Follow Bhawneet Kaur on Instagram'
    },
    {
      icon: FacebookIcon,
      url: 'https://www.facebook.com/bhawneetkaur',
      label: 'Connect with Bhawneet Kaur on Facebook'
    }
  ];

  return (
    <div className='social'>
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={url}
          className='social-icon-background'
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 