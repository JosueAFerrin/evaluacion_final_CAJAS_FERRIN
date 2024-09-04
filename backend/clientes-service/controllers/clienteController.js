const Cliente = require('../models/Cliente');

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Registrar un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body); // Verifica los datos aquí
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Obtener un cliente por ID
exports.obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un cliente por ID
exports.actualizarCliente = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!clienteActualizado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(clienteActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un cliente por ID
exports.eliminarCliente = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!clienteEliminado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
