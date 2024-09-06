import React, { useEffect, useState } from 'react';
import { getInventarios } from '../services/inventarioService';

const InventarioList = () => {
  const [inventarios, setInventarios] = useState([]);

  useEffect(() => {
    const fetchInventarios = async () => {
      try {
        const response = await getInventarios();
        setInventarios(response.data);
      } catch (error) {
        console.error('Error fetching inventarios:', error);
      }
    };

    fetchInventarios();
  }, []);

  return (
    <div>
      <h1>Inventario</h1>
      <ul>
        {inventarios.map(inventario => (
          <li key={inventario._id}>
            {inventario.producto} - {inventario.cantidad} unidades - ${inventario.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventarioList;
