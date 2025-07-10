const express = require('express');
const router = express.Router();
const reportCtrl = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware'); // Importe o middleware

router.get('/', authMiddleware, reportCtrl.generateReport);

module.exports = router;