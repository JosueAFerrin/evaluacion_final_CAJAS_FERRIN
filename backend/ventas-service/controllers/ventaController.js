const Venta = require('../models/Venta');

// Obtener todas las ventas
exports.obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Registrar una nueva venta
exports.crearVenta = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const nuevaVenta = new Venta(req.body);
    await nuevaVenta.save();
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener una venta por ID
exports.obtenerVentaPorId = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    res.json(venta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una venta por ID
exports.actualizarVenta = async (req, res) => {
  try {
    const ventaActualizada = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ventaActualizada) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    res.json(ventaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una venta por ID
exports.eliminarVenta = async (req, res) => {
  try {
    const ventaEliminada = await Venta.findByIdAndDelete(req.params.id);
    if (!ventaEliminada) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    res.json({ message: 'Venta eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
