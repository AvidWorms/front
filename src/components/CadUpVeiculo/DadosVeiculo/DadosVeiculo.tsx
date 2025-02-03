import React from 'react';
import FormSection from '../../FormPatern/FormSection';
import FormInput from '../../Input&Select/FormInput';

interface DadosVeiculoProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DadosVeiculo: React.FC<DadosVeiculoProps> = ({ formData, handleChange }) => (
    <FormSection legend = "Dados Veiculo">
      <FormInput id="marca" label="Marca" type="text" name="marca" value={formData.marca} onChange={handleChange} />
      <FormInput id="modelo" label="Modelo" type="text" name="modelo" value={formData.modelo} onChange={handleChange} />
      <FormInput id="anoFabricacao" label="Ano Fabricação" type="date" name="anoFabricacao" value={formData.anoFabricacao} onChange={handleChange} />
      <FormInput id="cor" label="Cor" type="text" name="cor" value={formData.cor} onChange={handleChange} />
      <FormInput id="tipoCombustivel" label="Tipo Combustível" type="text" name="tipoCombustivel" value={formData.tipoCombustivel} onChange={handleChange} />
      <FormInput id="placa" label="Placa" type="text" name="placa" value={formData.placa} onChange={handleChange} />
      <FormInput id="numeroChassi" label="Número Chassi" type="text" name="numeroChassi" value={formData.numeroChassi} onChange={handleChange} />
      <FormInput id="renavam" label="Renavam" type="text" name="renavam" value={formData.renavam} onChange={handleChange} />
      <FormInput id="capacidadePassageiros" label="Capacidade de Passageiros" type="text" name="capacidadePassageiros" value={formData.capacidadePassageiros} onChange={handleChange} />
    </FormSection>
);
