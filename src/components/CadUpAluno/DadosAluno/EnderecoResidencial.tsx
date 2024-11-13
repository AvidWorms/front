import React from 'react';
import FormSection from '../../FormPatern/FormSection';
import FormInput from '../../Input&Select/FormInput';

interface EnderecoResidencialProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const EnderecoResidencial: React.FC<EnderecoResidencialProps> = ({ formData, handleChange }) => (
    <FormSection legend = "Endereço Residencial">
      <FormInput id="cepResidencial" label="CEP" type="text" name="cepResidencial" value={formData.cepResidencial} onChange={handleChange} />
      <FormInput id="bairroResidencial" label="Bairro" type="text" name="bairroResidencial" value={formData.bairroResidencial} onChange={handleChange} />
      <FormInput id="logradouroResidencial" label="Logradouro" type="text" name="logradouroResidencial" value={formData.logradouroResidencial} onChange={handleChange} />
      <FormInput id="numeroResidencial" label="Número" type="text" name="numeroResidencial" value={formData.numeroResidencial} onChange={handleChange} />
      <FormInput id="complementoResidencial" label="Complemento" type="text" name="complementoResidencial" value={formData.complementoResidencial} onChange={handleChange} />
      <FormInput id="cidadeResidencial" label="Cidade" type="text" name="cidadeResidencial" value={formData.cidadeResidencial} onChange={handleChange} />
      <FormInput id="estadoResidencial" label="Estado" type="text" name="estadoResidencial" value={formData.estadoResidencial} onChange={handleChange} />
    </FormSection>
);

export default EnderecoResidencial;