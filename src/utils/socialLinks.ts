import FacebookIcon from '../assets/FacebookIcon';
import InstagramIcon from '../assets/InstagramIcon';
import LinkedinIcon from '../assets/LinkedinIcon';
import MediumIcon from '../assets/MediumIcon';
import { FC, SVGProps } from 'react';

export interface SocialLink {
  icon: FC<SVGProps<SVGSVGElement>>;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
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