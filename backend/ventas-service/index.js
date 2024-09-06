const express = require('express');
const ventasRouter = require('./routes/ventas');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Usar el router de ventas para las rutas que comienzan con '/ventas'
app.use('/ventas', ventasRouter);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Sales service running on port ${PORT}`);
});
