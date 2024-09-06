const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
  producto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
});

const Inventario = mongoose.model('Inventario', inventarioSchema);

module.exports = Inventario;
