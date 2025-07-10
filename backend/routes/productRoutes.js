const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware'); 

router.use(authMiddleware);


router.get('/', productCtrl.listProducts);
router.get('/category/:category', productCtrl.findByCategory);

module.exports = router;