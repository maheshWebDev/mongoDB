const express = require('express');

const {addProduct,getProducts,getOneProduct,updateProducts,deleteProduct} = require('../controller/productController')

const router = express.Router();

router.post('/products',addProduct);

router.get('/products',getProducts);

router.get('/products/:id',getOneProduct);

router.patch("/products/:id",updateProducts);

router.delete("/products/:id",deleteProduct);
module.exports = router