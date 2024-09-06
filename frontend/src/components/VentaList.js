import React, { useEffect, useState } from 'react';
import { getVentas } from '../services/ventaService';

const VentaList = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await getVentas();
        setVentas(response.data);
      } catch (error) {
        console.error('Error fetching ventas:', error);
      }
    };

    fetchVentas();
  }, []);

  return (
    <div>
      <h1>Ventas</h1>
      <ul>
        {ventas.map(venta => (
          <li key={venta._id}>
            {venta.producto} - {venta.cantidad} unidades - ${venta.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VentaList;
