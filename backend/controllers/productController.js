const { products } = require('../models/productModel');

exports.listProducts = (req, res) => {
  res.json(products);
};

exports.findByCategory = (req, res) => {
  const { category } = req.params;
  const filtered = products.filter(p => p.category === category);
  res.json(filtered);
};