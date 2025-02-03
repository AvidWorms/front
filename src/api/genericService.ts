import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const handleError = (error: any) => {
  if (error.response) {
    // O servidor respondeu com um código de status que não é 2xx
    const errorMessage = error.response.data.message || 'Erro na requisição';
    return errorMessage;
  } else if (error.request) {
    // Não recebeu resposta do servidor
    return 'Erro de rede: sem resposta do servidor';
  } else {
    // Erro ao configurar a requisição
    return 'Erro desconhecido';
  }
};

export const fetchItems = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    alert(`Erro: ${errorMessage}`); // Exibe a mensagem do erro retornado pelo servidor
    throw new Error(errorMessage);
  }
};

export const fetchItemById = async (endpoint: string, id: string) => {
  try {
    const response = await api.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    alert(`Erro: ${errorMessage}`); // Exibe a mensagem do erro retornado pelo servidor
    throw new Error(errorMessage);
  }
};

export const createItem = async (endpoint: string, item: any) => {
  try {
    const response = await api.post(endpoint, item);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    alert(`Erro: ${errorMessage}`); // Exibe a mensagem do erro retornado pelo servidor
    throw new Error(errorMessage);
  }
};

export const updateItem = async (endpoint: string, id: string, item: any) => {
  try {
    const response = await api.patch(`${endpoint}/${id}`, item);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    alert(`Erro: ${errorMessage}`); // Exibe a mensagem do erro retornado pelo servidor
    throw new Error(errorMessage);
  }
};

export const deleteItem = async (endpoint: string, id: string) => {
  try {
    await api.delete(`${endpoint}/${id}`);
  } catch (error) {
    const errorMessage = handleError(error);
    alert(`Erro: ${errorMessage}`); // Exibe a mensagem do erro retornado pelo servidor
    throw new Error(errorMessage);
  }
};
