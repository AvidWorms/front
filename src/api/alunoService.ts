import {
  fetchItems,
  fetchItemById,
  createItem,
  updateItem,
  deleteItem,
} from './genericService';

const endpoint = '/alunos';

export const fetchAlunos = async () => {
  try {
    return await fetchItems(endpoint);
  } catch (error) {
    console.error(`Erro ao buscar alunos: ${error}`);
    throw error;
  }
};

export const fetchAlunoById = async (id: string) => {
  try {
    return await fetchItemById(endpoint, id);
  } catch (error) {
    console.error(`Erro ao buscar aluno com ID ${id}: ${error}`);
    throw error;
  }
};

export const createAluno = async (aluno: any) => {
  try {
    return await createItem(endpoint, aluno);
  } catch (error) {
    console.error(`Erro ao criar aluno: ${error}`);
    throw error;
  }
};

export const updateAluno = async (id: string, aluno: any) => {
  try {
    return await updateItem(endpoint, id, aluno);
  } catch (error) {
    console.error(`Erro ao atualizar aluno com ID ${id}: ${error}`);
    throw error;
  }
};

export const deleteAluno = async (id: string) => {
  try {
    await deleteItem(endpoint, id);
  } catch (error) {
    console.error(`Erro ao deletar aluno com ID ${id}: ${error}`);
    throw error;
  }
};
