import React from 'react';
import styled from 'styled-components';

const EntryName = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: clamp(1rem, 2.5vw, 1.25rem); /* Ajuste dinâmico da fonte */
`;

const SCselect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: clamp(1rem, 2.5vw, 1.25rem); /* Ajuste dinâmico da fonte */
`;

type FormSelectProps = {
  options?: { label: string; value: string }[];
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> & React.SelectHTMLAttributes<HTMLSelectElement>;
const FormSelect: React.FC<FormSelectProps> = ({ label, options, ...rest }) => {
  return (
    <EntryName>
      {label}
        <SCselect {...rest}>
          {options?.map(({ label, value }, i) => (
            <option value={value} key={i}>
              {label}
            </option>
          ))}
        </SCselect>
    </EntryName>
  );
};

export default FormSelect;
