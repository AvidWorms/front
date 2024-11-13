import React, { useEffect } from 'react';
import { deleteAluno, fetchAlunos } from '../../api/alunoService';
import GenericList from '../GenericList';

const AlunoList: React.FC = () => {
  const [alunos, setAlunos] = React.useState<any[]>([]);

  useEffect(() => {
    loadAlunos();
  }, []);

  const loadAlunos = async () => {
    const data = await fetchAlunos();
    setAlunos(data);
  };

  const handleDelete = async (id: string) => {
    await deleteAluno(id);
    loadAlunos();
  };

  const renderItem = (aluno: any) => (
    <div>
      <p><strong>Nome:</strong> {aluno.nome}</p>
      <p><strong>CPF:</strong> {aluno.cpf}</p>
      <p><strong>Turma:</strong> {aluno.codigoTurma}</p>
    </div>
  );

  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <GenericList
      items={alunos}
      onEdit={(id) => handleNavigate(`/aluno-form/${id}`)}
      onDelete={handleDelete}
      onAdd={() => handleNavigate('/aluno-form')}
      renderItem={renderItem}
    />
  );
};

export default AlunoList;
