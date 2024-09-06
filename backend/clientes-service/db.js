const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kiboki1234:FVJnrbapjGARgv9n@cluster0.mju94.mongodb.net/supermercado-antojitos2?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB - Supermercado Antojitos');
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

const db = mongoose.connection;

module.exports = mongoose;
