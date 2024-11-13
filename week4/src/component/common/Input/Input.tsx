import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

function Input({ type, placeholder, value, onChange }: InputProps) {
  return (
    <InputWrapper>
      <InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;
