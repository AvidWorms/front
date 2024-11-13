import React from 'react';
import styled from 'styled-components';

interface FormSectionProps {
  legend: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ legend, children }) => (
  <Fieldset>
    <legend>{legend}</legend>
    <FieldContainer>
      {children}
    </FieldContainer>
  </Fieldset>
);

const Fieldset = styled.fieldset`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 10px;
  font-size: clamp(1rem, 2.5vw, 1.25rem); /* Ajuste dinâmico da fonte */
`;

export default FormSection;
