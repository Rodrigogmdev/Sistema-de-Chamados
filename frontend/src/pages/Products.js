var React = require('react');
var ProductList = require('../components/ProductList');
var CategorySearch = require('../components/CategorySearch');
function Products() {
  return React.createElement('div', null,
    React.createElement(CategorySearch),
    React.createElement(ProductList)
  );
}
module.exports = Products;