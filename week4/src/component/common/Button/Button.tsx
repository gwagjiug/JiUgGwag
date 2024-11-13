// Button.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../styles/theme';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  hoverColor?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<{ hoverColor?: string; disabled?: boolean }>`
  background-color: ${Theme.color.buttonColor};
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  width: 25rem;
  height: 3rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    ${({ hoverColor }) =>
      hoverColor
        ? css`
            background-color: ${hoverColor};
          `
        : css`
            background-color: #0056b3;
          `}
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #dcdcdc;
      cursor: not-allowed;
      &:hover {
        background-color: #dcdcdc;
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  hoverColor,
  disabled,
}) => {
  return (
    <StyledButton onClick={onClick} hoverColor={hoverColor} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
