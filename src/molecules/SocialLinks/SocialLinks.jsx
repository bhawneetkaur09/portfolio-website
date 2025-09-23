import FacebookIcon from '../../assets/FacebookIcon';
import InstagramIcon from '../../assets/InstagramIcon';
import LinkedinIcon from '../../assets/LinkedinIcon';
import MediumIcon from '../../assets/Mediumicon';
import './socialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
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
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
