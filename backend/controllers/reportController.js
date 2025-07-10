
const { products } = require('../models/productModel');

exports.generateReport = (req, res) => {
  const report = {
    totalProducts: products.length,

  };
  res.json(report);
};