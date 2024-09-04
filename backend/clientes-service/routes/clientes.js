const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Obtener todos los clientes
router.get('/', clienteController.obtenerClientes);

// Registrar un nuevo cliente
router.post('/', clienteController.crearCliente);

// Obtener un cliente por ID
router.get('/:id', clienteController.obtenerClientePorId);

// Actualizar un cliente por ID
router.put('/:id', clienteController.actualizarCliente);

// Eliminar un cliente por ID
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;
