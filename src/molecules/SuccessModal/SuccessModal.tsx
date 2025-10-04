import React from 'react';
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../Modal/ModalHeader';
import SocialLinks from '../SocialLinks/SocialLinks';
import { successModalLabels } from '../../utils/modalLabels';
import './successModal.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  email: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ 
  isOpen, 
  onClose, 
  name, 
  email 
}) => {
  const firstName = name ? name.split(' ')[0] : successModalLabels.thankYouDefault;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="success-modal">
      <ModalHeader
        icon={<span className="success-icon">{successModalLabels.successIcon}</span>}
        title={successModalLabels.title}
        onClose={onClose}
        closeLabel="Close success message"
      />

      <section className="modal-body">
        <p className="thank-you-message">
          {successModalLabels.thankYouPrefix} {firstName}
          {successModalLabels.thankYouSuffix}
        </p>
        <p className="response-message">
          {successModalLabels.responseMessage} <strong>{email}</strong>.
        </p>
        <hr className="divider" />
        <p className="connect-text">{successModalLabels.connectMessage}</p>
        <SocialLinks />
      </section>

      <footer className="modal-footer">
        <button 
          type="button"
          className="modal-button" 
          onClick={onClose}
          aria-label="Close modal"
        >
          {successModalLabels.confirmButton}
        </button>
      </footer>
    </Modal>
  );
};

export default SuccessModal;