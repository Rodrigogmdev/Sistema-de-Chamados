const express = require('express');
const router = express.Router();
const reportCtrl = require('../controllers/reportController');

router.get('/', reportCtrl.generateReport);

module.exports = router;