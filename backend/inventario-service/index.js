const express = require('express');
const inventariosRouter = require('./routes/inventarios');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Usar el router de inventarios para las rutas que comienzan con '/inventarios'
app.use('/inventarios', inventariosRouter);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Inventario service running on port ${PORT}`);
});
