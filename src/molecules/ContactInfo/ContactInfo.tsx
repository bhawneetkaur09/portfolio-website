import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import { contactInfo } from '../../utils/contact';
import './contactInfo.css';

export const ContactInfo: React.FC = () => (
  <aside className="contact-info">
    <h3>Let's Talk</h3>
    <p>{contactInfo.description}</p>
    <address className="contact-details">
      <dl className="contact-item">
        <dt>Email:</dt>
        <dd>
          <a href={contactInfo.email.href}>
            {contactInfo.email.address}
          </a>
        </dd>
      </dl>
      <dl className="contact-item">
        <dt>Location:</dt>
        <dd>{contactInfo.location}</dd>
      </dl>
      <dl className="contact-item flex">
        <dt>Feel free to ping me on social media</dt>
        <dd>
          <SocialLinks />
        </dd>
      </dl>
    </address>
  </aside>
);



