import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalContent, CloseButton } from '../style/modal';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        {children}
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;
