import axios from 'axios';

const API_URL = 'http://localhost:3002/ventas';

export const getVentas = () => {
  return axios.get(API_URL);
};

export const createVenta = (venta) => {
  return axios.post(API_URL, venta);
};

export const getVentaById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateVenta = (id, venta) => {
  return axios.put(`${API_URL}/${id}`, venta);
};

export const deleteVenta = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
