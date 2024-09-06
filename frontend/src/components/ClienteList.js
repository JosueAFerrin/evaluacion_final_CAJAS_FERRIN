import React, { useEffect, useState } from 'react';
import { getClientes } from '../services/clienteService';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await getClientes();
        setClientes(response.data);
      } catch (error) {
        console.error('Error fetching clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente._id}>
            {cliente.nombre} {cliente.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;
