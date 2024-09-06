import axios from 'axios';

const API_URL = 'http://localhost:3001/clientes';

export const getClientes = () => {
  return axios.get(API_URL);
};

export const createCliente = (cliente) => {
  return axios.post(API_URL, cliente);
};

export const getClienteById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateCliente = (id, cliente) => {
  return axios.put(`${API_URL}/${id}`, cliente);
};

export const deleteCliente = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
