import React from 'react';
import FormSection from '../../FormPatern/FormSection';
import FormSelect from '../../Input&Select/FormSelect';
import FormInput from '../../Input&Select/FormInput';

interface DadosMotoristaResponsavelProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const DadosMotoristaResponsavel: React.FC<DadosMotoristaResponsavelProps> = ({ formData, handleChange }) => (
  <FormSection legend = "Dados Motorista Responsavel">
        <FormSelect options={
          [
            {label:'Selecione',value:"1"},
            {label:'Manhã',value:"M" },
            {label:'Tarde',value:"T" },
            {label:'Noite',value:"N" }
          ]
          } label='Turno das Aulas' name="turno" value={formData.turno} onChange={handleChange} required />
      <FormInput label="DadosMotoristaResaponsavel" type="text" name="DadosMOtoristaResponsavel" value={formData.codigoTurma} onChange={handleChange} />
  </FormSection>
);