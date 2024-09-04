const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  identificacion: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
});

const Cliente = mongoose.model('cliente', clienteSchema);

module.exports = Cliente; // Asegúrate de exportar el modelo
