import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  passwordVisible?: boolean;
  togglePasswordVisibility?: () => void;
}

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  position: relative;
`;

const InputField = styled.input`
  width: 25rem;
  height: 3rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 0.5rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
  passwordVisible,
  togglePasswordVisibility,
}: InputProps) {
  return (
    <InputWrapper>
      <InputField
        name={name}
        type={name === 'password' && passwordVisible ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {name === 'password' && togglePasswordVisibility && (
        <IconWrapper onClick={togglePasswordVisibility}>
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </IconWrapper>
      )}
    </InputWrapper>
  );
}

export default Input;
