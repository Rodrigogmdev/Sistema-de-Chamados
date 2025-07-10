const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/reports', reportRoutes);

module.exports = app;