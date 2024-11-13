import React from 'react';
import styled, { css } from 'styled-components';

const DefaultInput = css`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: clamp(1rem, 2.5vw, 1.25rem); /* Ajuste dinâmico da fonte */
`

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
 
const FormInput = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
  return (
    <EntryName>
      <label htmlFor={props.id}>{label}</label>
      <Input id={props.id} {...props} />
    </EntryName>
  );
};

export default FormInput;
