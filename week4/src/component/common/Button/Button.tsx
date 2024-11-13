import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../styles/theme';

interface ButtonProps {
  text: string;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
}

const StyledButton = styled.button`
  width: 25rem;
  height: 3rem;
  font-size: 1rem;
  background-color: ${Theme.color.buttonColor};
  border: none;
  cursor: pointer;
`;

const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
