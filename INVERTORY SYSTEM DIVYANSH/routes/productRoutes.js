const express = require('express');
const c = require('../controllers/productController');
const validateId = require('../middleware/validateId');
const validateStock = require('../middleware/validateStock');

const router = express.Router();

router.route('/').get(c.getProducts).post(c.createProduct);

// Static routes MUST come before "/:id"
router.get('/low-stock', c.getLowStock);
router.get('/summary', c.getSummary);

router.patch('/:id/stock', validateId, validateStock, c.adjustStock);

router
  .route('/:id')
  .get(validateId, c.getProductById)
  .put(validateId, c.updateProduct)
  .delete(validateId, c.deleteProduct);

module.exports = router;
