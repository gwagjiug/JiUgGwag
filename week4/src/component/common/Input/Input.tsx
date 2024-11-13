import React from 'react';
import styled from 'styled-components';

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const InputField = styled.input`
  width: 25rem;
  height: 3rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 0.5rem;
`;

function Input({ name, type, placeholder, value, onChange }: InputProps) {
  return (
    <InputWrapper>
      <InputField
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;
