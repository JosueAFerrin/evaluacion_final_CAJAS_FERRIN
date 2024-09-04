const express = require('express');
const clientesRouter = require('./routes/clientes');
const cors = require('cors');
const db = require('./db'); // Importa la conexión a la base de datos

const app = express();
app.use(cors());
app.use(express.json());

// Usar el router de clientes para las rutas que comienzan con '/clientes'
app.use('/clientes', clientesRouter);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Clientes service running on port ${PORT}`);
});
