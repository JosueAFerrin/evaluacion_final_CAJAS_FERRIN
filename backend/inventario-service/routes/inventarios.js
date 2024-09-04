const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// Obtener todos los inventarios
router.get('/', inventarioController.obtenerInventarios);

// Registrar un nuevo inventario
router.post('/', inventarioController.crearInventario);

// Obtener un inventario por ID
router.get('/:id', inventarioController.obtenerInventarioPorId);

// Actualizar un inventario por ID
router.put('/:id', inventarioController.actualizarInventario);

// Eliminar un inventario por ID
router.delete('/:id', inventarioController.eliminarInventario);

module.exports = router;
