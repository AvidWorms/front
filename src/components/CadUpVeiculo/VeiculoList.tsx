import React, { useEffect } from 'react';
import { deleteVeiculo, fetchVeiculos } from '../../api/veiculoService';
import GenericList from '../GenericList';

const VeiculoList: React.FC = () => {
  const [veiculos, setVeiculos] = React.useState<any[]>([]);

  useEffect(() => {
    loadVeiculos();
  }, []);

  const loadVeiculos = async () => {
    const data = await fetchVeiculos();
    setVeiculos(data);
  };

  const handleDelete = async (id: string) => {
    await deleteVeiculo(id);
    loadVeiculos();
  };

  const renderItem = (veiculo: any) => (
    <div>
      <p><strong>Placa:</strong> {veiculo.placa}</p>
      <p><strong>Modelo:</strong> {veiculo.modelo}</p>
      <p><strong>Cor:</strong> {veiculo.cor}</p>
    </div>
  );

  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <GenericList
      items={veiculos}
      onEdit={(id) => handleNavigate(`/veiculo-form/${id}`)}
      onDelete={handleDelete}
      onAdd={() => handleNavigate('/veiculo-form')}
      renderItem={renderItem}
    />
  );
};

export default VeiculoList;
