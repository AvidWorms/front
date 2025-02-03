import React from 'react';
import FormSection from '../../FormPatern/FormSection';
import FormSelect from '../../Input&Select/FormSelect';
import FormInput from '../../Input&Select/FormInput';

interface DadosTurmaProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const DadosTurnoRota: React.FC<DadosTurmaProps> = ({ formData, handleChange }) => (
  <FormSection legend = "Turno e Rota">
        <FormSelect options={
          [
            {label:'Selecione',value:"1"},
            {label:'Manhã',value:"M" },
            {label:'Tarde',value:"T" },
            {label:'Noite',value:"N" }
          ]
          } label='Turno de Trabalho' name="turnoTrabalho" value={formData.turnoTrabalho} onChange={handleChange} required />
      <FormInput label="Rota" type="text" name="rotaTrabalho" value={formData.rotaTrabalho} onChange={handleChange} />
  </FormSection>
);