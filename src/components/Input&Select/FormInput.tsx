import React from 'react';
import styled, { css } from 'styled-components';

const DefaultInput = css`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: clamp(1rem, 2.5vw, 1.25rem); /* Ajuste dinâmico da fonte */
`;

const EntryName = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: clamp(1rem, 2.5vw, 1.25rem); /* Ajuste dinâmico da fonte */
`;

const Input = styled.input`
  ${DefaultInput}
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;

interface FormInputProps {
  label: string;
  error?: string;
}

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & FormInputProps> = ({ label, error, ...props }) => {
  return (
    <EntryName>
      <label htmlFor={props.id}>{label}</label>
      <Input id={props.id} {...props} required />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </EntryName>
  );
};

export default FormInput;
