import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 25rem;
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.8rem;
  background-color: #608bc1;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4b6e98;
  }
`;

export { ModalOverlay, ModalContent, CloseButton };
