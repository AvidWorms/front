import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMotorista, updateMotorista, fetchMotoristaById, deleteMotorista } from '../../api/motoristaService';
import GenericForm from '../FormPatern/GenericForm';
import { DadosPessoais } from './DadosMotorista/DadosPessoais';
import EnderecoResidencial from './DadosMotorista/EnderecoResidencial';
import { DadosTurnoRota } from './DadosMotorista/DadosTurnoRota';
import { SelectVeiculos } from './DadosMotorista/SelectVeiculos';

const MotoristaForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedMotoristaId, setSelectedMotoristaId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (id) {
      setSelectedMotoristaId(id);
      console.log('Selected Motorista ID:', id);
    }
  }, [id]);

  const initialData = {
    cpf: "",
    cnh: "",
    nome: "",
    nascimento: "",
    email: "",
    telefone: "",
    turnoTrabalho: "",
    rotaTrabalho: "",
    cepResidencial: "",
    bairroResidencial: "",
    logradouroResidencial: "", 
    numeroResidencial: "",
    complementoResidencial: "", 
    cidadeResidencial: "", 
    estadoResidencial: "",
    veiculoId: ""
  };

  const fieldComponents = [
    DadosPessoais,
    EnderecoResidencial,
    DadosTurnoRota,
    SelectVeiculos
  ];

  const onFormSubmit = () => {
    window.location.href = '/motoristas';
  };

  return (
    <GenericForm
      title="Formulário de Motorista"
      initialData={initialData}
      fetchItemById={fetchMotoristaById}
      createItem={createMotorista}
      updateItem={updateMotorista}
      deleteItem={deleteMotorista}
      onFormSubmit={onFormSubmit}
      selectedItemId={selectedMotoristaId}
      fieldComponents={fieldComponents}
    />
  );
};

export default MotoristaForm;
