const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

router.get('/', productCtrl.listProducts);
router.get('/category/:category', productCtrl.findByCategory);

module.exports = router;