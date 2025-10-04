import React from 'react';

interface ModalHeaderProps {
  icon?: React.ReactNode;
  title: string;
  onClose: () => void;
  closeLabel: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ 
  icon, 
  title, 
  onClose,
  closeLabel 
}) => (
  <header className="modal-header">
    {icon && <span className="modal-icon">{icon}</span>}
    <h2>{title}</h2>
    <button 
      type="button"
      className="close-button" 
      onClick={onClose}
      aria-label={closeLabel}
    >
      ×
    </button>
  </header>
);
