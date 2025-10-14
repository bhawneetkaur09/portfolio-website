import React from 'react';
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  className = '' 
}) => {
  if (!isOpen) return null;

  return (
    <dialog 
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      open
    >
      <article className={`modal-content ${className}`}>
        {children}
      </article>
    </dialog>
  );
};



