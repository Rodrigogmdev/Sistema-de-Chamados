const { users } = require('../models/userModel');
const { products } = require('../models/productModel');

exports.generateReport = (req, res) => {
  // exemplo: retorna contagem de usuários e produtos
  const report = {
    totalUsers: users.length,
    totalProducts: products.length,
  };
  res.json(report);
};