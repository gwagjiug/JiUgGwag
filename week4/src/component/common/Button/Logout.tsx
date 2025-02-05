import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: #9a7e6f;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const Logout: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Logout;
