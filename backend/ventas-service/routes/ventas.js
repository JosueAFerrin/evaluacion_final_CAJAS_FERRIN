const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Obtener todas las ventas
router.get('/', ventaController.obtenerVentas);

// Registrar una nueva venta
router.post('/', ventaController.crearVenta);

// Obtener una venta por ID
router.get('/:id', ventaController.obtenerVentaPorId);

// Actualizar una venta por ID
router.put('/:id', ventaController.actualizarVenta);

// Eliminar una venta por ID
router.delete('/:id', ventaController.eliminarVenta);

module.exports = router;
