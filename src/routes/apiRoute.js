const express = require('express');
const { createProduct, getAllProducts, updateProduct, deleteProduct, getProductById } = require('../controllers/productsController');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/', createProduct );

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;