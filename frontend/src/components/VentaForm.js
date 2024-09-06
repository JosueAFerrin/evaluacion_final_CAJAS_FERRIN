import React, { useState } from 'react';
import { createVenta } from '../services/ventaService';

const VentaForm = () => {
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nuevaVenta = { producto, cantidad, precio, total: cantidad * precio };
    console.log('Datos enviados:', nuevaVenta);
    try {
      await createVenta(nuevaVenta);
      alert('Venta registrada con éxito');
      // Resetear los campos del formulario
      setProducto('');
      setCantidad('');
      setPrecio('');
      setTotal('');
    } catch (error) {
      console.error('Error registrando venta:', error);
    }
  };

  return (
    <div>
      <h1>Registrar Venta</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Producto:
          <input type="text" value={producto} onChange={(e) => setProducto(e.target.value)} required />
        </label>
        <label>
          Cantidad:
          <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required />
        </label>
        <label>
          Precio:
          <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        </label>
        <label>
          Total:
          <input type="number" value={total} readOnly />
        </label>
        <button type="submit">Registrar Venta</button>
      </form>
    </div>
  );
};

export default VentaForm;
