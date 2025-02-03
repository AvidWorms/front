import {
  fetchItems,
  fetchItemById,
  createItem,
  updateItem,
  deleteItem,
} from './genericService';

const endpoint = '/veiculos';

export const fetchVeiculos = async () => {
  try {
    return await fetchItems(endpoint);
  } catch (error) {
    console.error(`Erro ao buscar veiculos: ${error}`);
    throw error;
  }
};

export const fetchVeiculoById = async (id: string) => {
  try {
    return await fetchItemById(endpoint, id);
  } catch (error) {
    console.error(`Erro ao buscar veiculos com ID ${id}: ${error}`);
    throw error;
  }
};

export const createVeiculo = async (veiculo: any) => {
  try {
    return await createItem(endpoint, veiculo);
  } catch (error) {
    console.error(`Erro ao criar veiculo: ${error}`);
    throw error;
  }
};

export const updateVeiculo= async (id: string, veiculo: any) => {
  try {
    return await updateItem(endpoint, id, veiculo);
  } catch (error) {
    console.error(`Erro ao atualizar Veiculo com ID ${id}: ${error}`);
    throw error;
  }
};

export const deleteVeiculo= async (id: string) => {
  try {
    await deleteItem(endpoint, id);
  } catch (error) {
    console.error(`Erro ao deletar veiculo com ID ${id}: ${error}`);
    throw error;
  }
};
