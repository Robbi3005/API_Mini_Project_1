const express = require('express');
const router = express.Router();

//---------------------------------------------------------------------------------------------------------------------

const Product = require('../controller/product-control');

//---------------------------------------------------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
// const middleware = require('../middleware/auth');

//---------------------------------------------------------------------------------------------------------------------

router.get('/', Product.getProducts);
router.get('/:id', Product.getProduct);
router.post('/', Product.addProduct);
router.put('/:id',Product.updateProduct);
router.delete('/:id', Product.deleteProduct);

module.exports = router;