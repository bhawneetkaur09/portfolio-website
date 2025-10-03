import React from 'react';
import { socialLinks } from '../../utils/socialLinks';
import './socialLinks.css';

const SocialLinks: React.FC = () => {
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