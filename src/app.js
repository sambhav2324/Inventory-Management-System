const express = require('express');
const productRoutes = require('./routes/productRoutes');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();

// Middleware to parse incoming JSON
app.use(express.json());

// Base Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Inventory and Data Management API'
  });
});

// Product Routes
app.use('/api/products', productRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;