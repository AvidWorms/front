import React, { useEffect } from 'react';
import { deleteMotorista, fetchMotoristas } from '../../api/motoristaService';
import GenericList from '../GenericList';

const MotoristaList: React.FC = () => {
  const [motoristas, setMotoristas] = React.useState<any[]>([]);

  useEffect(() => {
    loadMotoristas();
  }, []);

  const loadMotoristas = async () => {
    const data = await fetchMotoristas();
    setMotoristas(data);
  };

  const handleDelete = async (id: string) => {
    await deleteMotorista(id);
    loadMotoristas();
  };

  const renderItem = (motorista: any) => (
    <div>
      <p><strong>Nome:</strong> {motorista.nome}</p>
      <p><strong>CPF:</strong> {motorista.cpf}</p>
      <p><strong>Turno:</strong> {motorista.turnoTrabalho}</p>
    </div>
  );

  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <GenericList
      items={motoristas}
      onEdit={(id) => handleNavigate(`/motorista-form/${id}`)}
      onDelete={handleDelete}
      onAdd={() => handleNavigate('/motorista-form')}
      renderItem={renderItem}
    />
  );
};

export default MotoristaList;
