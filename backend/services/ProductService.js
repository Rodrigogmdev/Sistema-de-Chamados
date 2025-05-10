const { products } = require('../models/ProductModel');

class ProductService {
  getAll() {
    return products;
  }

  getByCategory(category) {
    return products.filter(product => product.category === category);
  }

  getById(id) {
    return products.find(product => product.id === id);
  }
}

module.exports = new ProductService();
