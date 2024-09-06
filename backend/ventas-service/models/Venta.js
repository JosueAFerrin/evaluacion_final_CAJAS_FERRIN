const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  producto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
  total: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
