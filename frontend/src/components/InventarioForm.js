import React, { useState } from 'react';
import { createInventario } from '../services/inventarioService';

const InventarioForm = () => {
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nuevoInventario = { producto, cantidad, precio };
    console.log('Datos enviados:', nuevoInventario);
    try {
      await createInventario(nuevoInventario);
      alert('Inventario registrado con éxito');
      // Resetear los campos del formulario
      setProducto('');
      setCantidad('');
      setPrecio('');
    } catch (error) {
      console.error('Error registrando inventario:', error);
    }
  };

  return (
    <div>
      <h1>Registrar Inventario</h1>
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
        <button type="submit">Registrar Inventario</button>
      </form>
    </div>
  );
};

export default InventarioForm;
