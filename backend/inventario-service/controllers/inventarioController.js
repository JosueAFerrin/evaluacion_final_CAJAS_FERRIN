const Inventario = require('../models/Inventario');

// Obtener todos los inventarios
exports.obtenerInventarios = async (req, res) => {
  try {
    const inventarios = await Inventario.find();
    res.json(inventarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Registrar un nuevo inventario
exports.crearInventario = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const nuevoInventario = new Inventario(req.body);
    await nuevoInventario.save();
    res.status(201).json(nuevoInventario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un inventario por ID
exports.obtenerInventarioPorId = async (req, res) => {
  try {
    const inventario = await Inventario.findById(req.params.id);
    if (!inventario) {
      return res.status(404).json({ message: 'Inventario no encontrado' });
    }
    res.json(inventario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un inventario por ID
exports.actualizarInventario = async (req, res) => {
  try {
    const inventarioActualizado = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inventarioActualizado) {
      return res.status(404).json({ message: 'Inventario no encontrado' });
    }
    res.json(inventarioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un inventario por ID
exports.eliminarInventario = async (req, res) => {
  try {
    const inventarioEliminado = await Inventario.findByIdAndDelete(req.params.id);
    if (!inventarioEliminado) {
      return res.status(404).json({ message: 'Inventario no encontrado' });
    }
    res.json({ message: 'Inventario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
