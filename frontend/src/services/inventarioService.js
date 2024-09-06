import axios from 'axios';

const API_URL = 'http://localhost:3003/inventarios';

export const getInventarios = () => {
  return axios.get(API_URL);
};

export const createInventario = (inventario) => {
  return axios.post(API_URL, inventario);
};

export const getInventarioById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateInventario = (id, inventario) => {
  return axios.put(`${API_URL}/${id}`, inventario);
};

export const deleteInventario = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
