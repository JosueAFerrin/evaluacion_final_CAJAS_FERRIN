import React from 'react';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';
import VentaForm from './components/VentaForm';
import VentaList from './components/VentaList';
import InventarioForm from './components/InventarioForm';
import InventarioList from './components/InventarioList';
function App() {
  return (
    <div className="App">
      <h1>Gestión de Clientes y Ventas</h1>
      <ClienteForm />
      <ClienteList />
      <VentaForm />
      <VentaList />
      <InventarioForm/>
      <InventarioList/>
    </div>
  );
}

export default App;
