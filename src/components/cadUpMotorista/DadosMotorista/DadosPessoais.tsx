import React from 'react';
import FormSection from '../../FormPatern/FormSection';
import FormInput from '../../Input&Select/FormInput';

interface DadosPessoaisProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DadosPessoais: React.FC<DadosPessoaisProps> = ({ formData, handleChange }) => (
    <FormSection legend = "Dados Pessoais">
      <FormInput id="nome" label="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} />
      <FormInput id="cpf" label="CPF" type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
      <FormInput id="cnh" label="CNH" type="text" name="cnh" value={formData.cnh} onChange={handleChange} />
      <FormInput id="telefone" label="Telefone" type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
      <FormInput id="dataNascimento" label="Data de Nascimento" type="date" name="nascimento" value={formData.nascimento} onChange={handleChange} />
      <FormInput id="email" label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
    </FormSection>
);
