import React, { useState } from 'react';
import { createCliente } from '../services/clienteService';

const ClienteForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nuevoCliente = { nombre, apellido, identificacion, direccion, telefono };
    console.log('Datos enviados:', nuevoCliente); // Verifica los datos aquí
    try {
      await createCliente(nuevoCliente);
      alert('Cliente creado con éxito');
      // Resetear los campos del formulario
      setNombre('');
      setApellido('');
      setIdentificacion('');
      setDireccion('');
      setTelefono('');
    } catch (error) {
      console.error('Error creando cliente:', error);
    }
  };
  

  return (
    <div>
      <h1>Agregar Cliente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </label>
        <label>
          Identificación:
          <input type="text" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} required />
        </label>
        <label>
          Dirección:
          <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
        </label>
        <label>
          Teléfono:
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </label>
        <button type="submit">Agregar Cliente</button>
      </form>
    </div>
  );
};

export default ClienteForm;
