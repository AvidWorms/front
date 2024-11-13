import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createAluno, updateAluno, fetchAlunoById, deleteAluno } from '../../api/alunoService';
import GenericForm from '../FormPatern/GenericForm';
import { DadosPessoais } from './DadosAluno/DadosPessoais';
import EnderecoResidencial from './DadosAluno/EnderecoResidencial';
import { EnderecoInstituicao } from './DadosAluno/EnderecoInstituicao';
import { DadosTurma } from './DadosAluno/DadosTurma';

const AlunoForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedAlunoId, setSelectedAlunoId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (id) {
      setSelectedAlunoId(id);
      console.log('Selected Aluno ID:', id);
    }
  }, [id]);

  const initialData = {
    cpf: "",
    nome: "",
    nascimento: "",
    email: "",
    telefone: "",
    turnoEstudo: "",
    codigoTurma: "",
    cepResidencial: "",
    bairroResidencial: "",
    logradouroResidencial: "", 
    numeroResidencial: "",
    complementoResidencial: "", 
    cidadeResidencial: "", 
    estadoResidencial: "", 
    nomeInstituicao: "",
    cepInstituicao: "",
    bairroInstituicao: "",
    logradouroInstituicao: "", 
    numeroInstituicao: "",
    complementoInstituicao: "", 
    cidadeInstituicao: "", 
    estadoInstituicao: "",
  };

  const fieldComponents = [
    DadosPessoais,
    EnderecoResidencial,
    EnderecoInstituicao,
    DadosTurma
  ];

  const onFormSubmit = () => {
    window.location.href = '/alunos';
  };

  return (
    <GenericForm
      title="Formulário de Aluno"
      initialData={initialData}
      fetchItemById={fetchAlunoById}
      createItem={createAluno}
      updateItem={updateAluno}
      deleteItem={deleteAluno}
      onFormSubmit={onFormSubmit}
      selectedItemId={selectedAlunoId}
      fieldComponents={fieldComponents}
    />
  );
};

export default AlunoForm;
