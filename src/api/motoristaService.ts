import {
  fetchItems,
  fetchItemById,
  createItem,
  updateItem,
  deleteItem,
} from './genericService';

const endpoint = '/motoristas';

export const fetchMotoristas = async () => {
  try {
    return await fetchItems(endpoint);
  } catch (error) {
    console.error(`Erro ao buscar motoristas: ${error}`);
    throw error;
  }
};

export const fetchMotoristaById = async (id: string) => {
  try {
    return await fetchItemById(endpoint, id);
  } catch (error) {
    console.error(`Erro ao buscar motorista com ID ${id}: ${error}`);
    throw error;
  }
};

export const createMotorista = async (motorista: any) => {
  try {
    return await createItem(endpoint, motorista);
  } catch (error) {
    console.error(`Erro ao criar motorista: ${error}`);
    throw error;
  }
};

export const updateMotorista = async (id: string, motorista: any) => {
  try {
    return await updateItem(endpoint, id, motorista);
  } catch (error) {
    console.error(`Erro ao atualizar motorista com ID ${id}: ${error}`);
    throw error;
  }
};

export const deleteMotorista = async (id: string) => {
  try {
    await deleteItem(endpoint, id);
  } catch (error) {
    console.error(`Erro ao deletar motorista com ID ${id}: ${error}`);
    throw error;
  }
};
