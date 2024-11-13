import React from 'react';
import FormSection from '../../FormPatern/FormSection';
import FormSelect from '../../Input&Select/FormSelect';
import FormInput from '../../Input&Select/FormInput';

interface DadosTurmaProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const DadosTurma: React.FC<DadosTurmaProps> = ({ formData, handleChange }) => (
  <FormSection legend = "Dados da Turma">
        <FormSelect options={
          [
            {label:'Selecione',value:"1"},
            {label:'Manhã',value:"M" },
            {label:'Tarde',value:"T" },
            {label:'Noite',value:"N" }
          ]
          } label='Turno das Aulas' name="turno" value={formData.turno} onChange={handleChange} required />
      <FormInput label="Código da Turma" type="text" name="codigoTurma" value={formData.codigoTurma} onChange={handleChange} />
  </FormSection>
);