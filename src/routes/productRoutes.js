const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getLowStockReport,
  getCategorySummary
} = require('../controllers/productController');

// Specific report routes must be declared before dynamic :id routes
router.get('/reports/low-stock', getLowStockReport);
router.get('/reports/category-summary', getCategorySummary);

router.route('/')
  .get(getAllProducts)
  .post(createProduct);

router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;