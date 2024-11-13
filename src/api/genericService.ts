import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchItems = async (endpoint: string) => {
  const response = await api.get(endpoint);
  return response.data;
};

export const fetchItemById = async (endpoint: string, id: string) => {
  const response = await api.get(`${endpoint}/${id}`);
  return response.data;
};

export const createItem = async (endpoint: string, item: any) => {
  const response = await api.post(endpoint, item);
  return response.data;
};

export const updateItem = async (endpoint: string, id: String, item: any) => {
  const response = await api.patch(`${endpoint}/${id}`, item);
  return response.data;
};

export const deleteItem = async (endpoint: string, id: string) => {
  await api.delete(`${endpoint}/${id}`);
};
