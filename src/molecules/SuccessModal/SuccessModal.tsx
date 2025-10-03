import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import { successModalLabels } from '../../utils/modalLabels';
import './successModal.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  email: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, name, email }) => {
  if (!isOpen) return null;

  const firstName = name ? name.split(' ')[0] : successModalLabels.thankYouDefault;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="success-icon">{successModalLabels.successIcon}</div>
          <h2>{successModalLabels.title}</h2>
          <button className="close-button" onClick={onClose}>
            {successModalLabels.closeButton}
          </button>
        </div>
        <div className="modal-body">
          <p>
            {successModalLabels.thankYouPrefix} {firstName}{successModalLabels.thankYouSuffix}
          </p>
          <p>
            {successModalLabels.responseMessage} {email}.
          </p>
          <div className="divider"></div>
          <p className="connect-text">{successModalLabels.connectMessage}</p>
          <div className="social-wrapper">
            <SocialLinks />
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            {successModalLabels.confirmButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;