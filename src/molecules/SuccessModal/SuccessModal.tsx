import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './successModal.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  email: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, name, email }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="success-icon">✨</div>
          <h2>Message Sent Successfully!</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>Thank you {name ? name.split(' ')[0] : 'there'}! 🎉</p>
          <p>I'll get back to you shortly at {email}.</p>
          <div className="divider"></div>
          <p className="connect-text">Meanwhile, let's connect!</p>
          <div className="social-wrapper">
            <SocialLinks />
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal; 