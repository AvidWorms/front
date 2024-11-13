import React from 'react';
import FormSection from '../../FormPatern/FormSection';
import FormInput from '../../Input&Select/FormInput';

interface EnderecoInstituicaoProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const EnderecoInstituicao: React.FC<EnderecoInstituicaoProps> = ({ formData, handleChange }) => (
  <FormSection legend="Endereço da Instituição de Ensino">
    <FormInput id="nomeInstituicao" label="Nome da Instituição" type="text" name="nomeInstituicao" value={formData.nomeInstituicao} onChange={handleChange} />
    <FormInput id="cepInstituicao" label="CEP" type="text" name="cepInstituicao" value={formData.cepInstituicao} onChange={handleChange} />
    <FormInput id="bairroInstituicao" label="Bairro" type="text" name="bairroInstituicao" value={formData.bairroInstituicao} onChange={handleChange} />
    <FormInput id="logradouroInstituicao" label="Logradouro" type="text" name="logradouroInstituicao" value={formData.logradouroInstituicao} onChange={handleChange} />
    <FormInput id="numeroInstituicao" label="Número" type="text" name="numeroInstituicao" value={formData.numeroInstituicao} onChange={handleChange} />
    <FormInput id="complementoInstituicao" label="Complemento" type="text" name="complementoInstituicao" value={formData.complementoInstituicao} onChange={handleChange} />
    <FormInput id="cidadeInstituicao" label="Cidade" type="text" name="cidadeInstituicao" value={formData.cidadeInstituicao} onChange={handleChange} />
    <FormInput id="estadoInstituicao" label="Estado" type="text" name="estadoInstituicao" value={formData.estadoInstituicao} onChange={handleChange} />
  </FormSection>
);

