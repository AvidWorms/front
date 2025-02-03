import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createVeiculo, updateVeiculo, fetchVeiculoById, deleteVeiculo} from '../../api/veiculoService';
import GenericForm from '../FormPatern/GenericForm';
import { DadosVeiculo } from './DadosVeiculo/DadosVeiculo';

const VeiculoForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedVeiculoId, setSelectedVeiculoId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (id) {
      setSelectedVeiculoId(id);
      console.log('Selected Veiculo ID:', id);
    }
  }, [id]);

  const initialData = {
    marca: "",
    modelo: "",
    anoFabricacao: "",
    cor: "",
    tipoCombustivel: "",
    placa: "",
    numeroChassi: "",
    renavam: "",
    capacidadePassageiros: "",
  };

  const fieldComponents = [
    DadosVeiculo,
    // EnderecoResidencial,
    // EnderecoInstituicao,
    // DadosMotoristaResponsavel
  ];

  const onFormSubmit = () => {
    window.location.href = '/veiculos';
  };

  return (
    <GenericForm
      title="Formulário de Veiculo"
      initialData={initialData}
      fetchItemById={fetchVeiculoById}
      createItem={createVeiculo}
      updateItem={updateVeiculo}
      deleteItem={deleteVeiculo}
      onFormSubmit={onFormSubmit}
      selectedItemId={selectedVeiculoId}
      fieldComponents={fieldComponents}
    />
  );
};

export default VeiculoForm;
